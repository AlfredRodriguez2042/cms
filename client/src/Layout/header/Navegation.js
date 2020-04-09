import React from 'react'
import { NavLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'

import { useSelector } from 'react-redux'
import Modals from '../../Components/Modals'

import MenuInfo from '../../Components/MenuInfo'

const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },

  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
    textDecoration: 'none',
    //color: '#383a42'
    color: '#53575A'
  },
  button: {
    color: 'red',
    borderRadius: 5,
    border: '1px solid red',
    margin: theme.spacing(2, 0),
    padding: '4px 10px',
    lineHeight: '12px',
    textTransform: 'none'
  }
}))

const _private = [{ title: 'system', url: '/system' }]
const _public = [
  { title: 'Home', url: '/' },
  { title: 'About', url: '/about' },
  { title: 'Articles', url: '/articles' }
]

const Navigation = () => {
  const isAuth = useSelector(state => state.user.isAuthenticated)

  const classes = useStyles()

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

        {isAuth && <MenuInfo />}
      </Toolbar>
    </>
  )
}
export default Navigation
