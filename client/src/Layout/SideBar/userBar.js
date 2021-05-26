import React from 'react'
import { SIDEBAR } from '../../Config'
import {
  Typography,
  makeStyles,
  Box,
  Container,
  Card,
  CardContent,
  Button,
} from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import { Divider } from 'antd'

const useStyle = makeStyles(() => ({
  card: {
    width: '15.5%',
    position: 'fixed',
    // left: 0,
  },
  title: {
    fontWeight: 'bold',
    textTransform: 'capitalize',
    letterSpacing: '1px',
  },
  iconButton: {
    textTransform: 'none',
  },

  body: {
    textAlign: 'center',
  },
  avatar: {
    width: '132px',
    height: '132px',
    borderRadius: '50%', //'66px',
  },
  container: {
    position: 'relative',
    marginTop: '6.3em',
  },
}))
const UserBar = ({ user }) => {
  if (Object.keys(user).length === 0) {
    user = UserBar.defaultProps.user
  }
  const classes = useStyle()
  return (
    <Container className={classes.container}>
      <Card className={classes.card}>
        <Box display="flex" justifyContent="center">
          <img
            src={user.avatar}
            className={classes.avatar}
            alt={user.username}
          />
        </Box>
        <CardContent className={classes.body}>
          <Typography variant="h5" className={classes.title}>
            {user.username}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {user.bio}
          </Typography>
          <Box display="flex" justifyContent="space-between">
            {!user.id &&
              Object.entries(SIDEBAR.homepages).map(([linkName, item]) => (
                <Button
                  startIcon={item.icon}
                  href={item.link}
                  className={classes.iconButton}
                >
                  {linkName}
                </Button>
              ))}
          </Box>
          <Alert severity="info">la pagina se actualiza con frecuencia</Alert>
          <Divider orientation="left">Frontend</Divider>
          <Divider orientation="center">&</Divider>
          <Divider orientation="left">Backend</Divider>
        </CardContent>
      </Card>
    </Container>
  )
}

UserBar.defaultProps = {
  user: SIDEBAR,
}

export default UserBar
