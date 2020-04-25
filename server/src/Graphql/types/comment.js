export default `
  type Query {
    Comments:[Comment]
    Comment(id:ID):Comment!
  }
  type Comment {
    id: ID!
    user: UserShort!
    createdAt: Date!
    updatedAt: String!
    article: ArticleShort!
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

  type Subscription {
    newComment: Comment!
  }
`
// mutacion puede devolver un post!
