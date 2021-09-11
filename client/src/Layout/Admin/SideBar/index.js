import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'

import { Drawer, IconButton, Divider } from '@material-ui/core'
import { ChevronLeft } from '@material-ui/icons'
import ListItems from './ListItems'

const drawerWidth = 240
const useStyles = makeStyles((theme) => ({
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },

  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  wrapper: {
    boxSizing: 'border-box',
  },
}))

const SideBar = ({ open, close }) => {
  const classes = useStyles()
  return (
    <div className={classes.wrapper}>
      <Drawer
        variant="permanent"
        anchor="left"
        open={open}
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={() => close()}>
            <ChevronLeft />
          </IconButton>
        </div>
        <Divider />
        <ListItems />
        <Divider />
      </Drawer>
    </div>
  )
}
export default SideBar
