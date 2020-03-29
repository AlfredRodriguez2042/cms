import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import InputBase from '@material-ui/core/InputBase'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
//import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search'

const useStyles = makeStyles(theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 250
    // fontSize: "19px"
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    fontSize: '14px'
  },
  iconButton: {
    padding: 6
  },
  divider: {
    height: 28,
    margin: 4
  }
}))

export default function CustomizedInputBase() {
  const classes = useStyles()

  return (
    <div component="form" className={classes.root}>
      {/* <IconButton className={classes.iconButton} aria-label="menu">
        <MenuIcon />
      </IconButton> */}
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>

      <InputBase
        className={classes.input}
        placeholder="Search "
        inputProps={{ 'aria-label': 'search google maps' }}
      />
    </div>
  )
}
