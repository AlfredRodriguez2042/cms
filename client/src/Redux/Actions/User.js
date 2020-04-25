import { USER_LOADED, USER_LOGIN_ERROR, USER_LOG_OUT } from '../types'

export const SignIn = (user) => {
  return (dispatch) => {
    try {
      dispatch({
        type: USER_LOADED,
        payload: user,
      })
    } catch (error) {
      console.log('error', error)
      dispatch({
        type: USER_LOGIN_ERROR,
        payload: error.response.data,
      })
    }
  }
}

export const SignUp = (user) => {
  return (dispatch) => {
    try {
      dispatch({
        type: USER_LOADED,
        payload: user,
      })
    } catch (error) {
      dispatch({
        type: USER_LOGIN_ERROR,
        payload: error,
      })
    }
  }
}

export const LogOut = () => {
  return (dispatch) => {
    try {
      dispatch({
        type: USER_LOG_OUT,
      })
    } catch (error) {
      console.log(error)
    }
  }
}
