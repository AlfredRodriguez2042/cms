import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import { Button, Link } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import { Form, Input, Modal, Checkbox } from 'antd'
import Joi from '@hapi/joi'

import FormItem from '../FormItem'
import { useMutation } from '@apollo/react-hooks'
import { SIGNUP_MUTATION } from '.././../Graphql/Mutations/User'
import Loader from '.././Loader'
import { validateError } from '../../Utils/ValidateError'
import { CountRender } from '../Renders'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: theme.spacing(8),
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    width: 400,
    borderRadius: 7,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
  },
  button: {
    color: 'red',
    borderRadius: 5,
    border: '1px solid red',
    margin: theme.spacing(2, 0),
    padding: '2px 6px',
    lineHeight: '16px',
  },
}))

const ModalSignUp = () => {
  const [form] = Form.useForm()
  const classes = useStyles()
  const [visible, setVisible] = React.useState(false)
  const [check, setCheck] = React.useState(false)
  const [state, setState] = React.useState()
  CountRender()

  const [signUp, { loading, error }] = useMutation(SIGNUP_MUTATION, {
    variables: state,
    update(proxy, result) {
      setVisible(false)
      console.log('prx', proxy)
      console.log('enviado', result)
    },
    onError(e) {},
  })

  if (process.env.NODE_ENV !== 'production') {
    validateError(error)
  }
  const setValues = (values) => {
    const { confirm, ...data } = values
    setState(data)
    signUp()
  }

  const onFinishFailed = ({ errorFields }) => {
    form.scrollToField(errorFields[0].name)
  }

  if (loading) {
    return <Loader />
  }

  return (
    <div>
      <Button
        type="button"
        onClick={() => setVisible(true)}
        variant="outlined"
        className={classes.button}
      >
        Register
      </Button>
      <Modal
        width={460}
        title="Register"
        visible={visible}
        onCancel={(e) => setVisible(false)}
        footer={null}
      >
        <Form
          onFinish={setValues}
          //  initialValues={{ remember: check }}
          className={classes.form}
          onFinishFailed={onFinishFailed}
        >
          <FormItem
            label="Name"
            name="name"
            rules={[
              { required: true, message: 'Name is required' },
              {
                validator: (_, values) => {
                  const { error } = Joi.string()
                    .required()
                    .min(6)
                    .pattern(/^(?=\w*[a-z])\S{5,20}$/)
                    .validate(values)
                  if (!error) {
                    return Promise.resolve()
                  }

                  return Promise.reject('')
                },
              },
            ]}
          >
            <Input placeholder="name " type="text" />
          </FormItem>

          <FormItem
            label="UserName"
            name="username"
            rules={[
              { required: true, message: ' UserName is required' },
              {
                validator: (_, values) => {
                  const { error } = Joi.string()
                    .alphanum()
                    .min(5)
                    .max(12)
                    .required()
                    .validate(values)
                  if (!error) {
                    return Promise.resolve()
                  }

                  return Promise.reject('min 5 / max 12')
                },
              },
            ]}
          >
            <Input placeholder="Username" type="text" />
          </FormItem>
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
            rules={[
              { required: true, message: 'Password is required' },
              {
                validator: (_, value) => {
                  const { error } = Joi.string()
                    .min(8)
                    .max(16)
                    .pattern(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/)
                    .required()
                    .validate(value)
                  if (!error) {
                    return Promise.resolve()
                  }
                  return Promise.reject(
                    'Invalid password must be a number and one capital letter'
                  )
                },
              },
            ]}
          >
            <Input.Password placeholder="Password " type="password" />
          </FormItem>
          <FormItem
            name="confirm"
            label="Confirm P"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please confirm your password!',
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve()
                  }

                  return Promise.reject(
                    'The two passwords that you entered do not match!'
                  )
                },
              }),
            ]}
          >
            <Input type="password" />
          </FormItem>
          <FormItem
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject('Should accept agreement'),
              },
            ]}
          >
            <Checkbox
              onChange={({ target }) => {
                setCheck(target.checked)
              }}
            >
              I have read the <Link>agreement</Link>
            </Checkbox>
          </FormItem>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={!check}
          >
            Sign Up
          </Button>
        </Form>
        {error
          ? error.graphQLErrors.map(({ message }, i) => (
              <Alert key={i} variant="outlined" severity="error">
                {message}
              </Alert>
            ))
          : null}
      </Modal>
    </div>
  )
}
export default ModalSignUp
