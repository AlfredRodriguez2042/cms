import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

import CircularProgress from '@material-ui/core/CircularProgress'

const useStyles = makeStyles({
  center: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center'
  }
})

function Loader() {
  const classes = useStyles()
  console.log('loadeeeer')
  return (
    <div className={classes.center}>
      <CircularProgress />
    </div>
  )
}

export default Loader
