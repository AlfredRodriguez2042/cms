import gql from 'graphql-tag'

export const CREATE_ARTICLE = gql`
  mutation createArticle(
    $title: String!
    $content: String!
    $userId: String!
    $tags: [TagInput]!
    $categories: [CategoryInput]
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
