import { Container, Grid, makeStyles } from '@material-ui/core'
import Titles from 'Components/Titles'
import React from 'react'

const useStyles = makeStyles(() => ({
  portfolio: {
    height: '100%',
    // scrollSnapAlign: 'start',
    // paddingTop: '64px',
  },
}))
const Portfolio = () => {
  const classes = useStyles()
  return (
    <section className={classes.portfolio}>
      <Titles title="Portfolio" type="h3" color="textPrimary" />

      <Grid container>
        <Grid item></Grid>
      </Grid>
    </section>
  )
}

export default Portfolio
