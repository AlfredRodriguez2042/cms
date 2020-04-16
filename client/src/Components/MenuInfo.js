import React from 'react'
import MenuItem from '@material-ui/core/MenuItem'
import { useMutation } from '@apollo/react-hooks'
import { LOGOUT } from '../Graphql/Mutations/User'
import { USER_LOG_OUT } from '../Redux/types'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { MoreVert, PowerSettingsNew, Star, Person } from '@material-ui/icons'
import { IconButton, Menu } from '@material-ui/core'

export default function MenuInfo() {
  const dispatch = useDispatch()
  const history = useHistory()
  const [anchorEl, setAnchorEl] = React.useState(null)

  const [logout, { loading }] = useMutation(LOGOUT, {
    onCompleted: (data) => {
      dispatch({ type: USER_LOG_OUT })
      history.push('/')
    },
  })
  const handleLogOut = () => {
    logout()
  }

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
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Person fontSize="small" color="inherit" style={{ marginRight: 5 }} />
          Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Star fontSize="small" color="secondary" style={{ marginRight: 5 }} />
          My Favorites
        </MenuItem>
        <MenuItem onClick={handleLogOut}>
          <PowerSettingsNew
            fontSize="small"
            color="error"
            style={{ marginRight: 5 }}
          />
          Log{loading ? 'ging out...' : 'out'}
        </MenuItem>
      </Menu>
    </div>
  )
}
