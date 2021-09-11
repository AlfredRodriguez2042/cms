import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  Divider,
  makeStyles,
  Typography,
} from '@material-ui/core'
import React from 'react'
import moment from 'moment'
import { CloudUpload } from '@material-ui/icons'

const useStyles = makeStyles(() => ({
  avatar: {
    overflow: 'none',
    width: 100,
    height: 100,
    transform: 'translate3d(0, -50%, 0)',
    boxShadow:
      ' 0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
  },
  card: {
    overflow: 'visible',
  },
}))

const ProfileContent = () => {
  const classes = useStyles()
  return (
    <>
      <Card className={classes.card}>
        <Box display="flex" alignItems="center" flexDirection="column">
          <Avatar
            className={classes.avatar}
            src="https://material-ui.com/static/images/avatar/1.jpg"
            alt="avatar"
          />
        </Box>

        <Box display="flex" alignItems="center" flexDirection="column">
          <Typography variant="h4">Alfredo Rodriguez G.</Typography>
          <Typography variant="h6">Web Developer</Typography>
          <Typography variant="body1">Buenos Aires - Argentina</Typography>
          <Typography variant="body1">{moment().format('hh:mm A')}</Typography>
        </Box>

        <Divider />
        <CardActions>
          <Button
            color="primary"
            fullWidth
            variant="contained"
            startIcon={<CloudUpload />}
          >
            Upload image
          </Button>
        </CardActions>
      </Card>
    </>
  )
}

export default ProfileContent
