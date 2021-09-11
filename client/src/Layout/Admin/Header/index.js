import React from 'react'
import NavBar from './NavBar'
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
const drawerWidth = 240
const useStyle = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'nowrap',
  },
  hide: {
    display: 'none',
  },
  menuIcon: {
    marginLeft: '-42px',
  },
}))
const AdminHeader = ({ open, close }) => {
  const classes = useStyle()
  return (
    <AppBar
      color="inherit"
      position="fixed"
      className={!open ? classes.appBar : classes.appBarShift}
    >
      <Container component="header" maxWidth="xl">
        <Toolbar className={classes.toolbar}>
          <Box display="flex" justifyContent="center" alignItems="center">
            <IconButton
              onClick={() => close()}
              className={open ? classes.hide : classes.menuIcon}
            >
              <Menu />
            </IconButton>

            <Typography>{Config.name}</Typography>
          </Box>
          <Hidden smDown>
            <NavBar />
          </Hidden>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default AdminHeader
