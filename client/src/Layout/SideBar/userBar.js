import React from 'react'
import { SIDEBAR } from '../../Config'
import { Typography, makeStyles, Paper, Button, Link } from '@material-ui/core'
import { IconButton } from '@material-ui/core'
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
  text: {
    color: '#53575A',
  },
  paper: {
    textAlign: 'center',
    padding: 10,
  },
  avatar: {
    width: '132px',
    height: '132px',
    borderRadius: '66px',
  },
}))
const UserBar = () => {
  const classes = useStyle()
  return (
    <Paper>
      <div className={classes.paper}>
        <img src={SIDEBAR.avatar} className={classes.avatar} alt="" />
        <Typography component="h1" variant="h4">
          {SIDEBAR.title}
        </Typography>
        <Typography variant="h6" className={classes.tex}>
          {SIDEBAR.subtitle}
        </Typography>
        <ul className={classes.homepages}>
          {Object.entries(SIDEBAR.homepages).map(([linkName, item]) => (
            <Button
              key={linkName}
              className={classes.iconButton}
              startIcon={item.icon}
            >
              <Link href={item.link} className={classes.link}>
                {linkName}
              </Link>
            </Button>
          ))}
        </ul>
        <Alert variant="outlined" severity="info">
          esta pagina se esta actualizando constantemente
        </Alert>
        <Divider orientation="left">Frontend</Divider>
        <Divider orientation="left">Backend</Divider>
      </div>
    </Paper>
  )
}

export default UserBar
