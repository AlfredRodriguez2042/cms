import { Box, Container, Grid, makeStyles, Typography } from '@material-ui/core'
import Titles from 'Components/Titles'
import React from 'react'

const useStyles = makeStyles(() => ({
  subtitle: {
    maxWidth: '680px',
    margin: 'auto',
  },
}))

const Services = () => {
  const classes = useStyles()
  return (
    <section>
      <Titles title="Services" type="h3" />
      <Box className={classes.subtitle}>
        <Typography align="center" variant="h6">
          Always enjoy interesting projects that are challenging and original.
          <br /> I have the ability od learning new things quickly and take on
          challenges, this is some services i can do
        </Typography>
      </Box>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5">Web Applications</Typography>
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
          <Grid item xs={12} md={6}>
            <Typography variant="h5">Mobile Apps</Typography>
            <Typography>
              Over 50% of the smartphone users start using their phone just
              after waking up in the morning and spend more than 3 hours per
              day. Our team can help you design an incredible iOS or Android
              application no matter the complexity. We will start by auditing
              your existing product/service or idea and build the prototype.
              Then we will begin building the interactions, animations, gestures
              and visual design.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5">Web Design</Typography>
            <Typography>
              Technext Website Design team creates state of the art design
              ensuring the consistency and perfection across all major operating
              systems. It creates synergy between visuals, feelings, and
              experiences. Millions of users are using the themes and templates
              created by the super talented and passionate web design team.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5">E-Comerce Sites</Typography>
            <Typography>
              Consumers are driving crazy to online stores and shops in record
              numbers. Our team can help you monetize your checkout page, create
              seamless buying experience on handheld devices, setup email
              marketing solution and help you sell more.
            </Typography>
          </Grid>
          <Grid item></Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default Services
