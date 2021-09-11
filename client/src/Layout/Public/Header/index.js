import React from 'react'
import Navigation from './Navegation'
import { Config } from 'Config'
import {
  Typography,
  Toolbar,
  AppBar,
  Container,
  makeStyles,
  Box,
  IconButton,
  Hidden,
} from '@material-ui/core'
import { Menu } from '@material-ui/icons'
import DrawerMenu from './DrawerMenu'
import useToggle from 'Hooks/useToggle'

const useStyle = makeStyles((theme) => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  hide: {
    display: 'none',
  },
  menuIcon: {
    marginLeft: '-42px',
  },
}))
const sections = [
  { name: 'Home', url: '/', icon: 'icon' },
  { name: 'About', url: '/about' },
  {
    name: 'Sign Up',
    url: '/signup',
  },
  {
    name: 'Login',
    url: '/login',
  },
]
const logo = '<'
const logo2 = '/>'
const PublicHeader = () => {
  const classes = useStyle()
  const [open, setOpen] = useToggle()
  return (
    <AppBar color="inherit" position="fixed" className={classes.appB1ar}>
      <Container maxWidth="xl">
        <Toolbar className={classes.toolbar}>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Typography variant="h6" style={{ fontWeight: 'bold' }}>
              <small style={{ color: 'red' }}>{logo}</small> {Config.name}{' '}
              <small style={{ color: 'red' }}> {logo2} </small>
            </Typography>
          </Box>

          <Hidden smDown>
            <Navigation />
          </Hidden>
          <Hidden mdUp>
            <IconButton
              onClick={setOpen}
              className={open ? classes.hide : classes.menuIcon}
            >
              <Menu />
            </IconButton>
          </Hidden>
        </Toolbar>
      </Container>
      <DrawerMenu sections={sections} setOpen={open} setClosed={setOpen} />
    </AppBar>
  )
}

export default PublicHeader
