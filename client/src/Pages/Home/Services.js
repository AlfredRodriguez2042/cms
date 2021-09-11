import { Box, Grid, makeStyles, Typography } from '@material-ui/core'
import Titles from 'Components/Titles'

import React from 'react'
import WebImage from 'assets/services/web.png'
import MobileImage from 'assets/services/mobile.png'
import DesignImage from 'assets/services/design.png'
import EcomerceImage from 'assets/services/ecomerce.png'
const useStyles = makeStyles((theme) => ({
  subtitle: {
    maxWidth: '680px',
    margin: 'auto',
  },
  services: {
    height: '100%',
    scrollSnapAlign: 'start',
    // paddingTop: '64px',
    marginBottom: '4rem',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  reverse: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
}))

const Services = () => {
  const classes = useStyles()
  return (
    <section className={classes.services}>
      <Titles title="Services" type="h3" color="textPrimary" />
      <Box className={classes.subtitle}>
        <Typography align="center" variant="h6" color="textPrimary">
          Always enjoy interesting projects that are challenging and original.
          <br /> I have the ability od learning new things quickly and take on
          challenges, this is some services i can do
        </Typography>
      </Box>
      <Grid container spacing={2} className={classes.reverse}>
        <Grid item xs={12} md={6}>
          <img
            src={WebImage}
            alt="web apllications"
            className={classes.image}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" color="textPrimary">
            Web Applications
          </Typography>
          <Typography>
            Web apps are the backbone of today's most popular software as a
            service product. We will help you succeed by conducting through
            market research and providing you actionable insights to position
            your product in the top. We will design the sketches, prototypes,
            and wireframes before writing a single line of code. We will
            implement analytics, feedback tools, support essentials to drive
            your business successfully.
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={6}>
          <img
            src={MobileImage}
            alt="web apllications"
            className={classes.image}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" color="textPrimary">
            Mobile Apps
          </Typography>
          <Typography>
            Over 50% of the smartphone users start using their phone just after
            waking up in the morning and spend more than 3 hours per day. Our
            team can help you design an incredible iOS or Android application no
            matter the complexity. We will start by auditing your existing
            product/service or idea and build the prototype. Then we will begin
            building the interactions, animations, gestures and visual design.
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={2} className={classes.reverse}>
        <Grid item xs={12} md={6}>
          <img
            src={DesignImage}
            alt="web apllications"
            className={classes.image}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" color="textPrimary">
            Web Design
          </Typography>
          <Typography>
            Technext Website Design team creates state of the art design
            ensuring the consistency and perfection across all major operating
            systems. It creates synergy between visuals, feelings, and
            experiences. Millions of users are using the themes and templates
            created by the super talented and passionate web design team.
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={6}>
          <img
            src={EcomerceImage}
            alt="web apllications"
            className={classes.image}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" color="textPrimary">
            E-Comerce Sites
          </Typography>
          <Typography>
            Consumers are driving crazy to online stores and shops in record
            numbers. Our team can help you monetize your checkout page, create
            seamless buying experience on handheld devices, setup email
            marketing solution and help you sell more.
          </Typography>
        </Grid>
      </Grid>
    </section>
  )
}

export default Services
