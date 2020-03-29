import { USER_LOADED, USER_LOGIN_ERROR } from '../types'

export const SignIn = user => {
  return dispatch => {
    try {
      dispatch({
        type: USER_LOADED,
        payload: user
      })
      console.log('llego', user)
    } catch (error) {
      console.log('aa', error)
      dispatch({
        type: USER_LOGIN_ERROR,
        payload: error.response.data
      })
    }
  }
}

export const SignUp = user => {
  return dispatch => {
    try {
      dispatch({
        type: USER_LOADED,
        payload: user
      })
    } catch (error) {
      dispatch({
        type: USER_LOGIN_ERROR,
        payload: error
      })
    }
  }
}
