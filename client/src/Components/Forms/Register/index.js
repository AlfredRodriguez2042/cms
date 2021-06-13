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
import {
  AccountCircle,
  Email,
  Lock,
  Visibility,
  VisibilityOff,
} from '@material-ui/icons'
import ButtonsMedia from 'Components/Buttons/ButtonsMedia'
import { useMutation } from '@apollo/react-hooks'
import { SIGNUP_MUTATION } from 'Graphql/Mutations/User'
import { validateError } from 'Utils/ValidateError'
import { Alert } from '@material-ui/lab'
import { createUserSchema } from 'Utils/FormValidate'

const useStyles = makeStyles(() => ({
  input: {
    borderRadius: '24px',
  },
  grid: {
    marginBottom: '16px',
  },
}))
const RegisterForm = ({ setClosed }) => {
  const [showPassword, hiddenPassword] = useState(false)
  const [state, setState] = useState()
  const classes = useStyles()
  const initialValues = {
    name: '',
    username: '',
    email: '',
    password: '',
    showPassword,
  }

  const [SignUp, { loading, error }] = useMutation(SIGNUP_MUTATION, {
    variables: state,
    update(proxy, result) {
      console.log('enviado', result)
    },
  })
  if (process.env.NODE_ENV !== 'production') {
    validateError(error)
  }
  const onSubmit = (values) => {
    setState(values)
    SignUp()
    if (!error) {
      console.log('error')
    }
  }
  const formik = useFormik({
    validationSchema: createUserSchema,
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
      <Grid className={classes.grid}>
        <TextField
          placeholder="name"
          fullWidth
          InputProps={{
            classes: { root: classes.input },
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          variant="outlined"
          {...formikProps('name')}
        />
      </Grid>
      <Grid className={classes.grid}>
        <TextField
          placeholder="user name"
          fullWidth
          InputProps={{
            classes: { root: classes.input },
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          variant="outlined"
          {...formikProps('username')}
        />
      </Grid>
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
          error
          helperText={errors['password']}
        />
      </Grid>
      <Grid className={classes.grid}>
        <Button
          className={classes.input}
          type="submit"
          variant="contained"
          fullWidth
          disabled={!isValid || isSubmitting}
          color="primary"
        >
          Submit
        </Button>
      </Grid>
      {error
        ? error.graphQLErrors.map(({ message }, i) => (
            <Alert key={i} variant="outlined" severity="error">
              {message}
            </Alert>
          ))
        : null}
      <ButtonsMedia title="Or Sign up with social media" />
    </form>
  )
}

export default RegisterForm
