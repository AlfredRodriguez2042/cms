export default `

  type Query {
    User(id:ID):User!
    Users:[User!]
    Profile:User!
  }

  type User {
    id: ID!
    name: String!
    username: String!
    email: String!
    password: String
    thumbnail: String
    roles: [Roles] !
    active: Boolean!
    createdAt: ID!
    articles:[ArticleShort!]
    comments:[Comment!]
  }

  type UserShort {
    id: ID!
    username: String!
    thumbnail: String
    active: Boolean
    roles: [Roles] !

  }

  type AuthPayload {
    token: String
    user: UserShort!
  }

  type Mutation {
    createUser(input: UserInput!): User!
    updateUser(input: UserUpdateInput!): User!
    deleteUser(id:ID): User!
    Login(input: LoginInput): AuthPayload!
    Logout:Boolean
    checkLoggedIn: AuthPayload!
  }

  input UserInput {
    name: String!
    thumbnail: String
    username: String!
    email: String!
    password: String!
    roles: String
  }

  input UserUpdateInput {
    id:ID!
    thumbnail: String
    username: String
    email: String
    password: String
    roles: String
  }

  input LoginInput {
    email: String!
    password: String!
  }

`
