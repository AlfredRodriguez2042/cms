import React from 'react'
import { Carousel } from 'antd'
import { Paper, makeStyles } from '@material-ui/core'

const Styles = makeStyles(() => ({
  papper: {},
  img: {
    height: '300px',
    //width: '100%',
    boxSizing: 'border-box',
    '& > *': {
      width: '100%',
      height: '100%',
    },
  },
}))

const carrousel = () => {
  const classes = Styles()
  return (
    <Paper>
      <Carousel autoplay>
        <div className={classes.img}>
          <img src="https://i.imgur.com/aBlu9Gy.png" />
        </div>
        <div className={classes.img}>
          <img src="https://images.yourstory.com/cs/1/4c34e970-b6fc-11e8-af1b-8fcd9af3e46b/nodeJs1543323095631.jpeg?fm=png&auto=format&w=800" />
        </div>
        <div className={classes.img}>
          <img src="https://www.isotools.org/wp-content/uploads/2019/02/Sistemas-Integrados-de-Gesti%C3%B3n.jpg" />
        </div>
      </Carousel>
    </Paper>
  )
}

export default carrousel
