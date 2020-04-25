import gql from 'graphql-tag'

export const LIKE_ARTICLE = gql`
  mutation likeArticle($id: ID!) {
    likeArticle(id: $id) {
      id
      likes {
        userId
        user {
          username
        }
      }
      likesNum
    }
  }
`
