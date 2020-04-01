import gql from 'graphql-tag'
import { useDispatch } from 'react-redux'
import { USER_LOADED } from '../../Redux/types'
import { useMutation } from '@apollo/react-hooks'
import { SignIn } from '../../Redux/Actions/User'

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
export function useCheckAuth() {
  const dispatch = useDispatch()

  const [checkLoggedIn, { error, loading }] = useMutation(CHECK_LOGGED_IN, {
    onCompleted: ({ checkLoggedIn: { user } }) => {
      console.log('mid', user)
      dispatch(SignIn(user))
    }
  })

  return { loading, checkLoggedIn, error }
}
