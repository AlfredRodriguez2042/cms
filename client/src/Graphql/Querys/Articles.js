import { gql } from 'apollo-boost'

export const ARTICLE_QUERY = gql`
  query($id: ID) {
    Article(id: $id) {
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
        username
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
export const ARTICLES_QUERY = gql`
  {
    Articles {
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
        username
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
