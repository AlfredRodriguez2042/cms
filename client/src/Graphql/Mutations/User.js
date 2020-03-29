import gql from 'graphql-tag'

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
