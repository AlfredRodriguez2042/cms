import { gql } from 'apollo-boost'

export const USERS_QUERY = gql`
  {
    Users {
      name
      email
    }
  }
`

export const PROFILE_QUERY = gql`
  {
    Profile {
      username
      email
      active
    }
  }
`
export const POSTS_QUERY = gql`
  {
    Posts {
      _id
      title
      body
      slug
      createdAt
      commentNum
      likesNum
    }
  }
`
