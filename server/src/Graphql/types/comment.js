export default `
  type Query {
    Comments:[Comment]
  }
  type Comment {
    id: ID!
    author: UserShort!
    createdAt: String!
    updatedAt: String!
    post: ArticleShort!
    content: String!
    likes:[Likes!]
  }

  type Mutation {
    createComment(input: CommentInput): Comment!
    deleteComment(id:ID): Comment!
  }

  input CommentInput {
    content: String!
    articleId: ID
    userId: ID
  }
`
// mutacion puede devolver un post!
