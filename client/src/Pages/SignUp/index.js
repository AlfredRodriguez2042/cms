import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { useMutation } from '@apollo/react-hooks'
import { SIGNUP_MUTATION } from '../../graphql/Mutations'
import { validateError } from '../../utils'
import Loader from '../../Components/Loader'

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}))

export default function SignUp(props) {
  const classes = useStyles()
  const [values, setValues] = useState({
    name: '',
    username: '',
    email: '',
    password: ''
  })

  const handleChange = ({ target }) => {
    const type = target.type
    const name = target.name
    const value = type === 'checkbox' ? target.checked : target.value
    setValues({
      ...values,
      [name]: value
    })
  }
  const [signUp, { loading, error }] = useMutation(SIGNUP_MUTATION, {
    update(proxy, result) {
      props.history.push('/signin')
    },
    variables: values
  })
  validateError(error)

  const handleSubmit = e => {
    e.preventDefault()
    signUp()
  }
  if (loading) return <Loader />

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}></Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="name"
                value={values.name}
                variant="outlined"
                required
                fullWidth
                label="Name"
                autoFocus
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                value={values.username}
                fullWidth
                label="User Name"
                name="username"
                autoComplete="lname"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                value={values.email}
                required
                fullWidth
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                value={values.password}
                fullWidth
                name="password"
                label="Password"
                type="password"
                autoComplete="current-password"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="check"
                    value="allowExtraEmails"
                    color="primary"
                    onChange={handleChange}
                  />
                }
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/signin" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
        {error
          ? error.graphQLErrors.map(({ message }, i) => (
              <p key={i}>{message}</p>
            ))
          : null}
      </div>
    </Container>
  )
}
