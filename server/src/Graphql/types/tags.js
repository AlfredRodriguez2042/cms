export default `

  type Tag {
    _id: ID
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
    _id: ID!
    username: ID
    createdAt: String
  }

  type Mutation {
    likeArticle(id: ID): Article
    likeComment(_id: ID): Comment
  }

`
