import gql from 'graphql-tag'

export const CREATE_ARTICLE = gql`
  mutation createArticle(
    $title: String!
    $content: String!
    $userId: ID!
    $tags: [TagInput]
    $categories: [categoryInput]
  ) {
    createArticle(
      input: {
        title: $title
        content: $content
        userId: $userId
        tags: $tags
        categories: $categories
      }
    ) {
      id
    }
  }
`
