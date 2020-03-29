import React from 'react'
import Header from './header'
import SideBar from './SideBar'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Container } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    boxSizing: 'border-box'
  },
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    boxShadow: '0 2px 8px #f0f1f2',
    fontSize: '14px'
  },
  item: {
    marginBottom: '5px'
  }
}))
const Layout = ({ children }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item md={12} className={classes.item}>
          <Container
            component="header"
            maxWidth="xl"
            className={classes.toolbar}
          >
            <Header />
          </Container>
        </Grid>
        <Grid item md={2}>
          <SideBar />
        </Grid>

        <Grid item md={8}>
          <Container>{children}</Container>
        </Grid>
      </Grid>
    </div>
  )
}

export default Layout
