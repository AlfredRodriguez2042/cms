import React from 'react'
import Navigation from './Navegation'
import Search from '../../Components/Search'

import { Typography, Toolbar, Grid } from '@material-ui/core'

const Header = () => {
  return (
    <Grid container justify="space-between">
      <Toolbar>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
        >
          Kuro
        </Typography>
      </Toolbar>
      <Search />
      <Navigation />
    </Grid>
  )
}

export default Header
