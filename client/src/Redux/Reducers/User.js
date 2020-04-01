import { USER_LOGIN_ERROR, USER_LOADED, USER_LOG_OUT } from '../types'
import { storage_token } from '../../Utils/constants'
import jwt from 'jsonwebtoken'
//import { Cookies } from 'react-cookie'

const jwtstorage = localStorage.getItem(storage_token)

if (jwtstorage) {
  const decoded = jwt.decode(jwtstorage)
  if ((decoded.exp = 1000 < Date.now())) {
    localStorage.removeItem(storage_token)
  }
}

const initialState = {
  token: jwtstorage,
  isAuthenticated: false, //jwtstorage ? true : false,
  status: 'idle',
  user: null,
  roles: 'user',
  followings: {},
  playList: [],
  likes: {},
  errorMessage: ''
}

export default function(state = initialState, action) {
  Object.freeze(state)
  switch (action.type) {
    case USER_LOADED:
      //localStorage.setItem(storage_token, jwtstorage)
      return {
        ...state,
        isAuthenticated: true,
        status: 'success',
        user: action.payload,
        roles: action.payload.roles[0].name
      }
    case USER_LOGIN_ERROR:
      localStorage.removeItem(storage_token)
      return {
        ...state,
        token: null,
        status: 'failure',
        errorMessage: action.payload
      }
    case USER_LOG_OUT:
      return {
        ...state,
        isAuthenticated: false,
        status: 'idle',
        user: null,
        roles: 'user'
      }
    default:
      return state
  }
}
