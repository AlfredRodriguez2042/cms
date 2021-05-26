import {
  Box,
  Button,
  Container,
  makeStyles,
  Typography,
} from '@material-ui/core'
import React from 'react'
import { useParams } from 'react-router-dom'
import Page from '../../Components/Base/Page'

const useStyles = makeStyles((theme) => ({
  content: {
    minHeight: `calc(100vh - 120px)`,
  },
  title: {
    fontSize: '3rem',
    lineHeight: '4.2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
}))
const Home = () => {
  const classes = useStyles()
  const params = useParams()

  //console.log(params.id)
  return (
    <Page title="home">
      <div className="wrapper__effects">
        <div className=" cube"></div>
        <div className=" cube"></div>
        <div className=" cube"></div>
        <div className=" cube"></div>
        <div className=" cube"></div>
        <div className="triangle"></div>
        <div className="triangle"></div>

        <div className="circle">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <div className="circle">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
      <Container>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          className={classes.content}
        >
          <Typography variant="h4" className={classes.title}>
            <span>Powerful tools for</span>
            <br />
            <span>amazing webs</span>
          </Typography>
          <Typography>te ayudamos a crear un proyecto a tu medida</Typography>
          <Typography>
            <Button variant="contained" color="primary">
              view more
            </Button>
          </Typography>
        </Box>
      </Container>
    </Page>
  )
}

export default Home

// <img src="https://res.cloudinary.com/dcyjlkfuh/image/upload/v1569932885/undraw_add_file_4gfw.svg" alt="img"/>
