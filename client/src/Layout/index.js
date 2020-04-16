import React from 'react'
import Header from './header'
import { AdminBar, UserBar } from './SideBar'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Container, Hidden } from '@material-ui/core'
import { useSelector } from 'react-redux'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    boxSizing: 'border-box',
  },
  container: {
    background: '#f0f0f0',
  },
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    boxShadow: '0 2px 8px #f0f1f2',
    fontSize: '14px',
  },
  item: {
    marginBottom: '5px',
  },
}))
const Layout = ({ children }) => {
  const rol = useSelector((state) => state.user.roles)

  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} md={12} xl={12} className={classes.item}>
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
            <Hidden smDown>
              <Grid item sm={4} md={3} lg={2} xl={2}>
                <UserBar />
              </Grid>
            </Hidden>
            <Grid item xs={12} sm={12} md={8} xl={8}>
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
