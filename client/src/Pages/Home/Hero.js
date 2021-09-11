import { Button, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  Hero: {
    height: '100vh', //`calc(100vh + 64px)`,
    // scrollSnapAlign: 'start',
    // paddingTop: '64px',
    marginBottom: '4rem',
  },
  title: {
    fontSize: '3rem',
    lineHeight: '4.2rem',
    fontWeight: 'bold',
    // marginBottom: '1rem',
  },
  container: {
    height: '100%',
    // justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row-reverse',
    textAlign: 'center',
  },
  img: {
    maxWidth: '480px',
    height: '480px',
    [theme.breakpoints.up('sm')]: {
      height: '100%',
    },
  },
}))
const Hero = () => {
  const classes = useStyles()
  return (
    <section className={classes.Hero}>
      <Grid container className={classes.container}>
        <Grid item xs={12} md={6}>
          <img
            src="https://technext.github.io/appco/assets/img/hero/hero_right.png"
            alt="title"
            className={classes.img}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            className={classes.title}
            color="textPrimary"
          >
            <span>Powerful tools for</span>
            <br />
            <span>amazing webs</span>
          </Typography>
          <Typography color="textPrimary">
            te ayudamos a crear un proyecto a tu medida
          </Typography>
          <Typography>
            <Button variant="contained" color="primary">
              view more
            </Button>
          </Typography>
        </Grid>
      </Grid>
    </section>
  )
}

export default Hero
