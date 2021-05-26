import { Grid, Hidden, makeStyles } from '@material-ui/core'
import React from 'react'
import Header from './Header'
import { UserBar } from '../SideBar'

const useStyles = makeStyles(() => ({
  content: {
    marginTop: 64,
  },
}))
const PublicLayout = ({ children }) => {
  const classes = useStyles()
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
