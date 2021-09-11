import React from 'react'
import MenuItem from '@material-ui/core/MenuItem'
import { useMutation } from '@apollo/react-hooks'
import { LOGOUT } from '../Graphql/Mutations/User'
import { USER_LOG_OUT } from '../Redux/types'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { MoreVert, PowerSettingsNew, Star, Person } from '@material-ui/icons'
import { Avatar, IconButton, makeStyles, Menu } from '@material-ui/core'
import { validateError } from '../Utils/ValidateError'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
  top: {
    top: '56px',
  },
}))

export default function MenuInfo() {
  const classes = useStyles()
  const id = useSelector((state) => state.user.user.id)
  const role = useSelector((state) => state.user.roles)
  const dispatch = useDispatch()
  const history = useHistory()
  const [anchorEl, setAnchorEl] = React.useState(null)

  const [logout, { loading, error }] = useMutation(LOGOUT, {
    variables: {
      id,
      status: 'offline',
    },
    onCompleted: () => {
      dispatch({ type: USER_LOG_OUT })
      history.push('/')
    },
  })
  if (process.env.NODE_ENV !== 'production') {
    validateError(error)
  }
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
    <div className={classes.root}>
      <Avatar
        src="https://material-ui.com/static/images/avatar/1.jpg"
        alt="avatar"
        sizes="large"
      />
      <IconButton disableRipple onClick={handleClick} size="small">
        <MoreVert />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        style={{ top: '42px' }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        <MenuItem
          onClick={handleClose}
          component={Link}
          to={role !== 'admin' ? '/app/profile' : '/admin/profile'}
        >
          <Person fontSize="small" style={{ marginRight: 5 }} />
          Profile
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          component={Link}
          to={role !== 'admin' ? '/app/favorites' : '/admin/favorites'}
        >
          <Star fontSize="small" style={{ marginRight: 5 }} />
          Favorites
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
