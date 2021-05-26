import React from 'react'

import { projectBrief } from '../../Config'
import Page from '../../Components/Base/Page'
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  IconButton,
  makeStyles,
  Typography,
} from '@material-ui/core'
import { BannerParallax } from 'Components/Banners'
import background from 'assets/background/bg3.jpg'
import { Facebook, GitHub, Instagram, Twitter } from '@material-ui/icons'
import { Divider } from 'antd'
import TabPanel from 'Components/TabPanel'

const useStyles = makeStyles((theme) => ({
  avatar: {
    overflow: 'none',
    width: '160px',
    height: 'auto',
    transform: 'translate3d(0, -50%, 0)',
    boxShadow:
      ' 0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
  },
  profile: {
    marginTop: '-30px',
  },

  card: {
    overflow: 'visible',
  },
  title: {
    textTransform: 'capitalize',
    fontWeight: 600,
    letterSpacing: '1px',
  },
  container: {
    marginTop: '-95px',
    position: 'relative',
    zIndex: '3',
  },
  brief: {
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row-reverse',
    },
  },
  description: {
    marginTop: '2.5em',
  },
}))
export default function About() {
  const classes = useStyles()
  return (
    <Page title="about">
      <BannerParallax image={background} />
      <Container className={classes.container}>
        <Card className={classes.card}>
          <Box
            display="flex"
            justifyContent="center"
            className={classes.contentImg}
          >
            <Avatar
              src="https://material-ui.com/static/images/avatar/1.jpg"
              alt="avatar"
              className={classes.avatar}
            />
          </Box>
          <Box textAlign="center" className={classes.profile}>
            <Typography
              variant="h5"
              className={classes.title}
              color="textPrimary"
            >
              Alfredo Rodriguez G.
            </Typography>
            <Typography variant="h6" color="textSecondary">
              Web Developer
            </Typography>
          </Box>
          <Box textAlign="center">
            <IconButton>
              <Facebook />
            </IconButton>
            <IconButton>
              <GitHub />
            </IconButton>
            <IconButton>
              <Twitter />
            </IconButton>
            <IconButton>
              <Instagram />
            </IconButton>
          </Box>
          <CardContent>
            <Divider orientation="left">
              <Typography
                variant="h6"
                color="textPrimary"
                className={classes.title}
              >
                {projectBrief.title}
              </Typography>
            </Divider>
            <Grid container className={classes.brief} spacing={2}>
              <Grid item xs={12} md={4}>
                <TabPanel tabs={projectBrief.tabs} />
              </Grid>
              <Grid item sm={12} md={8}>
                <Typography variant="body1" className={classes.description}>
                  This project is build with React and Nodejs
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </Page>
  )
}
