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
        createdAt
        content
        user {
          username
        }
      }
      likesNum

      likes {
        username
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
