import React from 'react'
import { NavLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'

import { useSelector } from 'react-redux'
import Modals from '../../../Components/Modals'

import MenuInfo from '../../../Components/MenuInfo'
import { Link } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },

  toolbarLink: {
    padding: theme.spacing(1),
    //color: '#383a42'
    //  color: '#53575A',
  },
}))

const _private = [{ title: 'system', url: '/system' }]
const _public = [
  { title: 'Home', url: '/' },
  { title: 'About', url: '/about' },
  { title: 'Articles', url: '/articles' },
]

const NavBar = () => {
  const isAuth = useSelector((state) => state.user.isAuthenticated)

  const classes = useStyles()

  return (
    <>
      <Toolbar component="nav" variant="dense">
        {_public.map((section) => (
          <Link
            color="textPrimary"
            component={NavLink}
            key={section.title}
            to={section.url}
            className={classes.toolbarLink}
          >
            {section.title}
          </Link>
        ))}

        {isAuth ? (
          _private.map((section) => (
            <Link
              color="textPrimary"
              component={NavLink}
              key={section.title}
              to={section.url}
              className={classes.toolbarLink}
            >
              {section.title}
            </Link>
          ))
        ) : (
          <Modals />
        )}

        {isAuth && <MenuInfo />}
      </Toolbar>
    </>
  )
}
export default NavBar
