import React from 'react'
import Header from './header'
import { AdminBar, UserBar } from './SideBar'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Container } from '@material-ui/core'
import { useSelector } from 'react-redux'

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
  const rol = useSelector(state => state.user.roles)
  console.log(rol)
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

        {rol === 'user' ? (
          <>
            <Grid item md={2}>
              <UserBar />
            </Grid>

            <Grid item md={8}>
              <Container>{children}</Container>
            </Grid>
          </>
        ) : (
          <>
            <Grid item md={2}>
              <AdminBar />
            </Grid>
            <Grid item md={8}>
              {children}
            </Grid>
          </>
        )}
      </Grid>
    </div>
  )
}

export default Layout
