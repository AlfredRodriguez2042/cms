import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { useMutation } from '@apollo/react-hooks'
import { LOGIN_MUTATION } from '../../graphql/Mutations'
import { validateError } from '../../utils'
import { signIn } from '../../Redux/actions/Auth'
import { connect } from 'react-redux'

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh'
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'dark'
        ? theme.palette.grey[900]
        : theme.palette.grey[50],
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  paper: {
    margin: theme.spacing(8, 4),
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
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}))

function SignIn(props) {
  const classes = useStyles()
  const [values, setValues] = useState()

  const handleChange = ({ target }) => {
    const type = target.type
    const name = target.name
    const value = type === 'checkbox' ? target.checked : target.value
    setValues({
      ...values,
      [name]: value
    })
  }

  const [login, { loading, error }] = useMutation(LOGIN_MUTATION, {
    //  update: (proxy, result) => console.log(),
    variables: values,
    onCompleted: ({ Login: { user, token } }) => {
      localStorage.setItem('jwt', token)
      props.signIn(user)
      props.history.push('/')
    }
  })
  validateError(error)
  const handleSubmit = e => {
    e.preventDefault()
    login()
  }
  if (loading) <p>loadingg</p>

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}></Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
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
      </Grid>
    </Grid>
  )
}

const mapStateToProps = state => ({ errorMessage: state.auth.errorMessage })

export default connect(mapStateToProps, { signIn })(SignIn)
