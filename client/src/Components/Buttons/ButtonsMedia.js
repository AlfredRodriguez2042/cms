import { Button, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import Facebook from '../Icons/Facebook'
import Google from '../Icons/Google'

const useStyles = makeStyles((theme) => ({
  input: {
    borderRadius: '24px',
  },
  title: {
    marginBottom: '1em',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
  },
}))

const ButtonsMedia = ({ title = '' }) => {
  const classes = useStyles()
  return (
    <>
      <Typography align="center" className={classes.title}>
        {title}
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Button
            className={classes.input}
            classes={{ root: classes.paper }}
            variant="contained"
            fullWidth
            size="large"
            startIcon={<Google />}
          >
            Sign in with Google
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            className={classes.input}
            variant="contained"
            color="primary"
            fullWidth
            size="large"
            startIcon={<Facebook />}
          >
            Sign in with Facebook
          </Button>
        </Grid>
      </Grid>
    </>
  )
}

export default ButtonsMedia
