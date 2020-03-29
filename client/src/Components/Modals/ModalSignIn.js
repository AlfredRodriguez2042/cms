import React, { useContext, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import { Modal, Form, Input } from 'antd'
import { Button } from '@material-ui/core'
import { Alert } from '@material-ui/lab'

import { useMutation } from '@apollo/react-hooks'
import FormItem from '../FormItem'
import { SIGNIN_MUTATION } from '../../Graphql/Mutations/User'
import { useDispatch } from 'react-redux'
import { SignIn } from '../../Redux/Actions/User'
import Loader from '../Loader'
import { storage_token } from '../../Utils/constants'
import { validateError } from '../../Utils/ValidateError'

const useStyles = makeStyles(theme => ({
  label: {
    borderColor: '#2196f3'
  },

  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },

  button: {
    color: '#2196f3',
    borderRadius: 5,
    border: '1px solid #2196f3 ',
    margin: theme.spacing(1),
    padding: '4px 10px',
    lineHeight: '16px'
  }
}))

const ModalSignIn = () => {
  const [form] = Form.useForm()
  const dispatch = useDispatch()
  const classes = useStyles()

  const [visible, setVisible] = React.useState(false)
  const [state, setState] = React.useState()

  const [login, { loading, error, called }] = useMutation(SIGNIN_MUTATION, {
    variables: state,
    onCompleted: ({ Login: { user, token } }) => {
      localStorage.setItem(storage_token, token)
      dispatch(SignIn(user))

      setVisible(false)
    },
    onError(error) {}
  })

  if (process.env.NODE_ENV !== 'production') {
    validateError(error)
  }

  const handleSubmit = values => {
    console.log('val', values)
    setState(values)
    login()
  }

  const onFinishFailed = ({ errorFields }) => {
    form.scrollToField(errorFields[0].name)
  }
  if (loading) {
    return <Loader />
  }

  return (
    <>
      <Button
        type="button"
        onClick={() => setVisible(true)}
        variant="outlined"
        className={classes.button}
      >
        Login
      </Button>
      <Modal
        width={400}
        title="login"
        visible={visible}
        onCancel={e => setVisible(false)}
        footer={null}
        className={classes.modal}
      >
        <Form
          form={form}
          onFinish={handleSubmit}
          onFinishFailed={onFinishFailed}
          className={classes.form}
          layout="horizontal"
        >
          <FormItem
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Email is required' }]}
          >
            <Input placeholder="Email " type="email" />
          </FormItem>

          <FormItem
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Password is required' }]}
          >
            <Input placeholder="Password " type="password" />
          </FormItem>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            // onClick={e => e.preventDefault()}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              Forgot password?
            </Grid>
            <Grid item>{"Don't have an account? Sign Up"}</Grid>
          </Grid>
        </Form>
        {error
          ? error.graphQLErrors.map(({ message }, i) => (
              <Alert key={i} variant="outlined" severity="error">
                {message}
              </Alert>
            ))
          : null}
      </Modal>
    </>
  )
}

export default ModalSignIn
