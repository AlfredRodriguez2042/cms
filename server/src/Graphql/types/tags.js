export default `

  type Tag {
    id: ID
    name: String!
  }
  type Roles {
    name: String!
  }
  input RolesInput {
    name: String
  }
  input TagInput {
    name: String!
  }
  type Likes {
    id: ID!
    username: ID
    userId:ID
    user:UserShort
    createdAt: String
  }

  type Mutation {
    likeArticle(id: ID): Article
    likeComment(id: ID): Comment
  }

`
