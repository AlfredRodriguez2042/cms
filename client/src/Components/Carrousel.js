import React from 'react'
import { Carousel } from 'antd'
import { Paper, makeStyles } from '@material-ui/core'
const useStyles = makeStyles(theme => ({
  papper: {},
  img: {
    height: '300px'
  }
}))
const carrousel = () => {
  const classes = useStyles
  return (
    <Paper>
      <Carousel autoplay>
        <div>
          <h1>primera</h1>
        </div>
        <div>
          <h1>segunda</h1>
        </div>
        <div>
          <h1>tercrea</h1>
        </div>
      </Carousel>
    </Paper>
  )
}

export default carrousel
