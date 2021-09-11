import React from 'react'
import { NavLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'

import { useSelector } from 'react-redux'

import MenuInfo from 'Components/MenuInfo'
import { Button, Link } from '@material-ui/core'
import ModalForm from 'Components/Modal/ModalForm'
import { LoginForm } from 'Components/Forms'
import useToggle from 'Hooks/useToggle'
import { RegisterForm } from 'Components/Forms'

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },

  toolbarLink: {
    padding: theme.spacing(1),
    //color: '#383a42'
    //  color: '#53575A',
  },
}))

const _private = [{ title: 'system', url: '/system' }]
const _public = [
  { title: 'Home', url: '/' },
  { title: 'About', url: '/about' },
  { title: 'Articles', url: '/articles' },
  { title: 'Tutorials', url: '/tutorials' },
  { title: 'Tools', url: '/tools' },
]

const Navigation = () => {
  const isAuth = useSelector((state) => state.user.isAuthenticated)
  const [login, setLogin] = useToggle()
  const [register, setRegister] = useToggle()

  const classes = useStyles()

  return (
    <>
      <Toolbar component="nav" variant="dense">
        {_public.map((section) => (
          <Link
            color="textPrimary"
            component={NavLink}
            key={section.title}
            to={section.url}
            className={classes.toolbarLink}
          >
            {section.title}
          </Link>
        ))}

        {isAuth ? (
          _private.map((section) => (
            <Link
              color="textPrimary"
              component={NavLink}
              key={section.title}
              to={section.url}
              className={classes.toolbarLink}
            >
              {section.title}
            </Link>
          ))
        ) : (
          <>
            <Button
              size="small"
              color="primary"
              variant="contained"
              onClick={setLogin}
              disableElevation
            >
              Login
            </Button>
            <ModalForm title="Login" open={login} setClosed={setLogin}>
              <LoginForm />
            </ModalForm>
            <Button
              size="small"
              color="secondary"
              variant="outlined"
              onClick={setRegister}
              style={{ marginLeft: '8px' }}
            >
              sign up
            </Button>
            <ModalForm title="Register" open={register} setClosed={setRegister}>
              <RegisterForm setClosed={setRegister} />
            </ModalForm>
          </>
        )}

        {isAuth && <MenuInfo />}
      </Toolbar>
    </>
  )
}
export default Navigation
