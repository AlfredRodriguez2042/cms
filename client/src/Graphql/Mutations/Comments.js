import gql from 'graphql-tag'

export const CREATE_COMMENT = gql`
  mutation createComment($userId: ID!, $articleId: ID!, $content: String!) {
    createComment(
      input: { userId: $userId, content: $content, articleId: $articleId }
    ) {
      id
      content
    }
  }
`
export const SUSCRIPTION_COMMENT = gql`
  subscription newComment {
    newComment {
      createdAt
      content
    }
  }
`
