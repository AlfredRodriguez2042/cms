import { Grid, Hidden, makeStyles } from '@material-ui/core'
import React from 'react'
import Header from './Header'
import { UserBar } from '../SideBar'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

const useStyles = makeStyles(() => ({
  content: {
    marginTop: '64px',
  },
}))
const PublicLayout = ({ children }) => {
  const role = useSelector((state) => state.user.roles)
  const history = useHistory()
  const classes = useStyles()
  if (role === 'admin') {
    history.push('/admin')
  }
  return (
    <div>
      <Grid item xs={12} md={12} xl={12}>
        <Header />
      </Grid>
      <Grid container>
        <Hidden xsUp>
          <Grid item md={2}>
            <UserBar />
          </Grid>
        </Hidden>
        <Grid item xs={12} className={classes.content}>
          {children}
        </Grid>
      </Grid>
    </div>
  )
}

export default PublicLayout
