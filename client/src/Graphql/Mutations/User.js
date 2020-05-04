import gql from 'graphql-tag'
import { useDispatch } from 'react-redux'
import { useMutation } from '@apollo/react-hooks'
import { SignIn } from '../../Redux/Actions/User'
import { storage_token } from '../../Utils/constants'

export const SIGNIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    Login(input: { email: $email, password: $password }) {
      token
      user {
        id
        username
        active
        roles {
          name
        }
      }
    }
  }
`

export const SIGNUP_MUTATION = gql`
  mutation createUser(
    $name: String!
    $username: String!
    $email: String!
    $password: String!
  ) {
    createUser(
      input: {
        name: $name
        username: $username
        email: $email
        password: $password
      }
    ) {
      username
    }
  }
`

const CHECK_LOGGED_IN = gql`
  mutation checkLoggedIn {
    checkLoggedIn {
      token
      user {
        id
        username
        active
        roles {
          name
        }
      }
    }
  }
`

export const LOGOUT = gql`
  mutation Logout($id: ID!, $status: String!) {
    Logout(input: { id: $id, status: $status })
  }
`
export const USERS_ONLINE = gql`
  subscription userOnline {
    userOnline {
      id
      username
      tumbnail
    }
  }
`

export function useCheckAuth() {
  const dispatch = useDispatch()

  const [checkLoggedIn, { error, loading }] = useMutation(CHECK_LOGGED_IN, {
    onCompleted: ({ checkLoggedIn: { user, token } }) => {
      localStorage.setItem(storage_token, token)
      dispatch(SignIn(user))
    },
    onError: () => {},
  })

  return { loading, checkLoggedIn, error }
}
