import { Box, makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(() => ({
  box: {
    height: '380px',
    width: '100%',
    position: 'relative',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    display: 'flex',
    alignItems: 'center',
    zIndex: '1',
    overflow: 'hidden',
    top: '-32px',
    '&:before': {
      background: 'rgba(0, 0, 0, 0.5)',
      content: '""',
      width: '100%',
      height: '100%',
    },
  },
}))

const BannerParallax = ({ children, image }) => {
  const classes = useStyles()
  return (
    <Box className={classes.box} style={{ background: `url(${image})` }}>
      {children}
    </Box>
  )
}

export default BannerParallax
