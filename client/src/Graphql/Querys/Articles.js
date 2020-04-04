import { gql } from 'apollo-boost'

export const ARTICLE_QUERY = gql`
  query($id: ID) {
    Article(id: $id) {
      id
      title
      content
      user {
        username
      }
      createdAt
      comment {
        content
      }
      commentNum
      viewCount
      tags {
        name
      }
      likesNum
    }
  }
`
export const ARTICLES_QUERY = gql`
  {
    Articles {
      id
      title
      content
      user {
        username
      }
      createdAt
      viewCount
      comment {
        content
      }
      likesNum
      tags {
        name
      }
    }
  }
`
