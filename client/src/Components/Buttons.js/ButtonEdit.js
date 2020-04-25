import React from 'react'
import MenuItem from '@material-ui/core/MenuItem'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { MoreVert } from '@material-ui/icons'
import { IconButton, Menu } from '@material-ui/core'

export default function ButtonEdit() {
  const dispatch = useDispatch()
  const history = useHistory()
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <IconButton onClick={handleClick}>
        <MoreVert />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Edit</MenuItem>
        <MenuItem onClick={handleClose}>delete</MenuItem>
      </Menu>
    </div>
  )
}
