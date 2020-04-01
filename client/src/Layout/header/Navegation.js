import React from 'react'
import { NavLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'

import { useSelector, useDispatch } from 'react-redux'
import Modals from '../../Components/Modals'

import MenuInfo from '../../Components/MenuInfo'
import { useMutation } from '@apollo/react-hooks'
import { LOGOUT } from '../../Graphql/Mutations/User'
import { USER_LOG_OUT } from '../../Redux/types'

const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },

  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
    textDecoration: 'none',
    // color: "#383a42"
    color: '#53575A'
  }
}))

const _private = [
  { title: 'Programin', url: '/programing' },
  { title: 'system', url: '/system' }
]
const _public = [
  { title: 'Home', url: '/' },
  { title: 'About', url: '/about' }
]

const Admin = [
  { title: 'Admin', url: '/admin' },
  { title: 'Dashboard', url: '/admin/dashboard' }
]

const Navigation = props => {
  const dispatch = useDispatch()
  const isAuth = useSelector(state => state.user.isAuthenticated)
  const rol = useSelector(state => state.user.roles)

  const classes = useStyles()

  const [logout, { loading }] = useMutation(LOGOUT, {
    onCompleted: data => dispatch({ type: USER_LOG_OUT })
  })
  const handleLogOut = () => {
    logout()
  }

  return (
    <>
      <Toolbar component="nav" variant="dense">
        {_public.map(section => (
          <NavLink
            key={section.title}
            to={section.url}
            className={classes.toolbarLink}
          >
            {section.title}
          </NavLink>
        ))}
        {rol === 'admin' &&
          Admin.map(section => (
            <NavLink
              key={section.title}
              to={section.url}
              className={classes.toolbarLink}
            >
              {section.title}
            </NavLink>
          ))}
        {isAuth ? (
          _private.map(section => (
            <NavLink
              key={section.title}
              to={section.url}
              className={classes.toolbarLink}
            >
              {section.title}
            </NavLink>
          ))
        ) : (
          <Modals />
        )}
        {isAuth && (
          <button onClick={handleLogOut} aria-busy={loading}>
            Log{loading ? 'ging out...' : 'out'}
          </button>
        )}
        {isAuth && <MenuInfo />}
      </Toolbar>
    </>
  )
}
export default Navigation
