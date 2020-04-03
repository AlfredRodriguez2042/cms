import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
//import PropTypes from 'prop-types'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const auth = useSelector(state => state.user.isAuthenticated)
  return (
    <Route
      {...rest}
      render={props => {
        return auth ? <Component {...props} /> : <Redirect to="/home" />
      }}
    />
  )
}

export default PrivateRoute
