import gql from 'graphql-tag'

export const CREATE_ARTICLE = gql`
  mutation createArticle(
    $title: String!
    $description: String!
    $content: String!
    $userId: String!
    $tags: [TagInput]!
    $categories: [CategoryInput]
  ) {
    createArticle(
      input: {
        title: $title
        content: $content
        description: $description
        userId: $userId
        tags: $tags
        categories: $categories
      }
    ) {
      id
      title
      description
      content
      user {
        username
      }
      createdAt
      viewCount
      commentNum
      comments {
        content
      }
      likesNum

      likes {
        userId
        user {
          username
        }
      }
      tags {
        name
      }
      categories {
        name
      }
    }
  }
`
