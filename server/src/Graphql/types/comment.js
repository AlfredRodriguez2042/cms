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
    createComment(ArticleId: ID , input: CommentInput): Comment!
    deleteComment(id:ID): Comment!
  }

  input CommentInput {
    content: String!
  }
`
// mutacion puede devolver un post!
