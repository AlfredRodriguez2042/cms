import { Container, Grid } from '@material-ui/core'
import Titles from 'Components/Titles'
import React from 'react'

const Portfolio = () => {
  return (
    <section>
      <Titles title="Portfolio" type="h3" />
      <Container>
        <Grid container>
          <Grid item></Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default Portfolio
