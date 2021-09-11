import { Box, IconButton, makeStyles, Typography } from '@material-ui/core'
import { Palette, Settings } from '@material-ui/icons'
import useToggle from 'Hooks/useToggle'
import clsx from 'clsx'

import React from 'react'

const drawerWidth = 200
const useStyles = makeStyles((theme) => ({
  Switcher: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    //boxShadow: '1px 4px 50px 2px rgba(0,0,0,0.5)',
    padding: '15px',
    filter: 'blur(0.8px)',
  },
  switcherOpen: {
    display: 'block',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  switcherClose: {
    display: 'none',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),

    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  glass: {
    borderTopLeftRadius: '6px',
    borderBottomLeftRadius: '6px',
    borderTopColor: 'gray',
    borderTopStyle: 'solid',
    borderBottomColor: 'gray',
    borderBottomStyle: 'solid',
    borderLeftColor: 'gray',
    borderLeftStyle: 'solid',
    border: '1px',
    right: 0,
    top: 77,
    zIndex: '200',
    position: 'fixed',
    overflowY: 'hiden',
    display: 'flex',
  },
  Buttons: {
    display: 'flex',
    flexDirection: 'column',
  },
}))
const Switcher = () => {
  const [open, setOpen] = useToggle()
  const classes = useStyles()
  return (
    <div className={classes.glass}>
      <div className={classes.Buttons}>
        <IconButton>
          <Settings />
        </IconButton>

        <IconButton onClick={setOpen}>
          <Palette />
        </IconButton>
      </div>
      <Box
        className={clsx(classes.Switcher, {
          [classes.switcherOpen]: open,
          [classes.switcherClose]: !open,
        })}
      >
        <Typography align="center">Theme Colors</Typography>
      </Box>
    </div>
  )
}

export default Switcher
