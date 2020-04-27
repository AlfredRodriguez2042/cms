import React from 'react'
import Badge from '@material-ui/core/Badge'
import Avatar from '@material-ui/core/Avatar'
import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import { useSelector } from 'react-redux'

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}))(Badge)

export default function BadgeAvatar({ image, title }) {
  const auth = useSelector((state) => state.user.isAuthenticated)
  return (
    <div>
      {auth ? (
        <StyledBadge
          overlap="circle"
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          variant="dot"
        >
          <Avatar alt="thumbnail" src={image} />
        </StyledBadge>
      ) : (
        <Avatar alt="thumbnail " src={image} />
      )}
      <Typography>{title}</Typography>
    </div>
  )
}
