import React from 'react'
import { SIDEBAR } from '../../Config'
import { Typography, makeStyles, Paper, Button, Link } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import { Divider } from 'antd'

const useStyle = makeStyles(() => ({
  homepages: {
    padding: 0,
    width: '214px',
    lineHeight: '24px',
    display: 'flex',
    justifyContent: 'center',
    listStyle: 'none',
  },
  item: {
    padding: '0 6px',
    // textAlign: 'center'
  },
  link: {
    textDecoration: 'none',
    color: '#53575A',
    marginLeft: '4px',
  },
  iconButton: {
    padding: 2,
    fontSize: '16px',
    borderRadius: '7px',
    textTransform: 'none',
    marginLeft: '4px',
  },
  bio: {
    color: '#53575A',
  },
  paper: {
    textAlign: 'center',
    padding: 10,
  },
  avatar: {
    width: '132px',
    height: '132px',
    borderRadius: '50%', //'66px',
  },
}))
const UserBar = ({ user }) => {
  if (Object.keys(user).length === 0) {
    user = UserBar.defaultProps.user
  }
  const classes = useStyle()
  return (
    <Paper>
      <div className={classes.paper}>
        <img src={SIDEBAR.avatar} className={classes.avatar} alt="" />
        <Typography variant="h6">{user.username}</Typography>
        <Typography variant="body2" className={classes.bio}>
          {user.bio}
        </Typography>
        <ul className={classes.homepages}>
          {/* {!user.id &&
            Object.entries(SIDEBAR.homepages).map(([linkName, item]) => (
              <Button
                key={linkName}
                className={classes.iconButton}
                startIcon={item.icon}
              >
                <Link href={item.link} className={classes.link}>
                  {linkName}
                </Link>
              </Button>
            ))} */}
        </ul>
        <Alert severity="info">la pagina se actualiza con frecuencia</Alert>
        <Divider orientation="left">Frontend</Divider>
        <Divider orientation="center">&</Divider>
        <Divider orientation="left">Backend</Divider>
      </div>
    </Paper>
  )
}

UserBar.defaultProps = {
  user: SIDEBAR,
}

export default UserBar
