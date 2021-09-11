import { Badge, IconButton } from '@material-ui/core'
import { Notifications } from '@material-ui/icons'
import React from 'react'

const ButtonNotification = () => {
  return (
    <IconButton size="small">
      <Badge badgeContent={2} color="error">
        <Notifications />
      </Badge>
    </IconButton>
  )
}

export default ButtonNotification
