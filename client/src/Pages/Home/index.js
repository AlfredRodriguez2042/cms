import { Container, makeStyles } from '@material-ui/core'
import React from 'react'
import Page from 'Components/Base/Page'
import Hero from './Hero'
import Portfolio from './Portfolio'
import Services from './Services'

const useStyles = makeStyles(() => ({
  scrollSnap: {
    height: '100vh',
    scrollSnapType: ' y mandatory',
    // overflowY: 'scroll',
  },
}))
const Home = () => {
  const classes = useStyles()

  return (
    <Page styles={classes.scrollSnap}>
      <Container>
        <Hero />
        <Services />
        <Portfolio />
      </Container>
    </Page>
  )
}

export default Home

// <img src="https://res.cloudinary.com/dcyjlkfuh/image/upload/v1569932885/undraw_add_file_4gfw.svg" alt="img"/>
