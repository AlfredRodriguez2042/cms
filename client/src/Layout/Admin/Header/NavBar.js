import React from 'react'
import { NavLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import MenuInfo from '../../../Components/MenuInfo'
import { Link } from '@material-ui/core'
import ButtonNotification from 'Components/Buttons/ButtonNotification'

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },

  toolbarLink: {
    padding: theme.spacing(1),
    //color: '#383a42'
    //  color: '#53575A',
  },
  toolbarNav: {
    overflowX: 'auto',
  },
}))

const sections = [
  { title: 'Home', url: '/admin' },
  { title: 'About', url: '/admin/about' },
  { title: 'Articles', url: '/admin/articles' },
]

const NavBar = () => {
  const classes = useStyles()

  return (
    <>
      <Toolbar component="nav" variant="dense">
        {sections.map((section) => (
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
        <ButtonNotification />
        <MenuInfo />
      </Toolbar>
    </>
  )
}
export default NavBar
