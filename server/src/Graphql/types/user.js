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
    roles: [Roles] !
    active: Boolean!
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
    deleteUser(id:ID): User!
    Login(input: LoginInput): AuthPayload!
    Logout:Boolean
    checkLoggedIn: AuthPayload!
  }

  input UserInput {
    name: String!
    username: String!
    email: String!
    password: String!
    roles: String
  }

  input LoginInput {
    email: String!
    password: String!
  }

`
