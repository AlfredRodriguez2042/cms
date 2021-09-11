import {
  Button,
  Grid,
  IconButton,
  InputAdornment,
  makeStyles,
  TextField,
} from '@material-ui/core'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { Alert } from '@material-ui/lab'
import { Email, Lock, Visibility, VisibilityOff } from '@material-ui/icons'
import { useDispatch } from 'react-redux'
import { loginUserAcction } from 'Redux/Actions/User'
import ButtonsMedia from 'Components/Buttons/ButtonsMedia'
import { useMutation } from '@apollo/react-hooks'
import { SIGNIN_MUTATION } from 'Graphql/Mutations/User'
import { validateError } from 'Utils/ValidateError'
import { loginUserSchema } from 'Utils/FormValidate'
import Loader from 'Components/Loader'

const useStyles = makeStyles(() => ({
  input: {
    borderRadius: '24px',
  },
  grid: {
    marginBottom: '16px',
  },
}))
const LoginForm = () => {
  const dispatch = useDispatch()
  const [state, seState] = useState()
  const [showPassword, hiddenPassword] = useState(false)
  const classes = useStyles()
  const initialValues = {
    password: '',
    email: '',
    showPassword,
  }
  const [login, { loading, error }] = useMutation(SIGNIN_MUTATION, {
    variables: state,
    onCompleted: ({ Login: { user, token } }) => {
      dispatch(loginUserAcction(user))
    },
  })

  if (process.env.NODE_ENV !== 'production') {
    validateError(error)
  }

  const onSubmit = (values) => {
    seState(values)
    login()
  }
  const formik = useFormik({
    validationSchema: loginUserSchema,
    initialValues,
    onSubmit,
  })
  const {
    isValid,
    isSubmitting,
    values,
    handleBlur,
    touched,
    handleChange,
    errors,
  } = formik
  const formikProps = (name, type = 'text', initialValue = '') => ({
    name,
    // label: name,
    type,
    value: typeof values[name] !== 'undefined' ? values[name] : initialValue,
    onChange: handleChange,
    onBlur: handleBlur,
    error: touched[name] && errors[name],
    helperText: touched[name] ? errors[name] : '',
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      {loading && <Loader />}
      <Grid className={classes.grid}>
        <TextField
          placeholder="email"
          fullWidth
          InputProps={{
            classes: { root: classes.input },
            startAdornment: (
              <InputAdornment position="start">
                <Email />
              </InputAdornment>
            ),
          }}
          variant="outlined"
          {...formikProps('email', 'email')}
        />
      </Grid>
      <Grid className={classes.grid}>
        <TextField
          placeholder="password"
          fullWidth
          InputProps={{
            classes: { root: classes.input },

            startAdornment: (
              <InputAdornment position="start">
                <Lock />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => hiddenPassword(!showPassword)}>
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          type={showPassword ? 'text' : 'password'}
          variant="outlined"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          helperText={errors['password']}
        />
      </Grid>
      <Grid className={classes.grid}>
        <Button
          className={classes.input}
          type="submit"
          variant="outlined"
          fullWidth
          disabled={!isValid || isSubmitting}
          color="primary"
        >
          Submit
        </Button>
        {error
          ? error.graphQLErrors.map(({ message }, i) => (
              <Alert key={i} variant="outlined" severity="error">
                {message}
              </Alert>
            ))
          : null}
      </Grid>
      <ButtonsMedia title="Or Sign in with social media" />
    </form>
  )
}

export default LoginForm
