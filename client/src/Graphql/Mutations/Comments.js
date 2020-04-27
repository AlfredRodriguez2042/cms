import gql from 'graphql-tag'

export const CREATE_COMMENT = gql`
  mutation createComment($userId: ID!, $articleId: ID!, $content: String!) {
    createComment(
      input: { userId: $userId, content: $content, articleId: $articleId }
    ) {
      id
      createdAt
      content
      user {
        username
      }
    }
  }
`
export const SUSCRIPTION_COMMENT = gql`
  subscription newComment {
    newComment {
      createdAt
      content
      user {
        username
      }
    }
  }
`
