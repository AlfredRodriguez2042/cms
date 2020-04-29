export default `

  type Query {
    Article(id:ID): Article!
    Articles:[Article!] @auth(requires:user)
  }

  type Article {
    id: ID
    title: String!
    content: String!
    userId: String
    user:UserShort
    image: String!
    description: String!
    createdAt: Date!
    comments:[Comment!]
    commentNum: Int
    viewCount: Int
    likes:[Likes!]
    likesNum: Int
    tags:[Tag!]
    categories: [Category!]
  }

  type ArticleShort {
    id: ID
    title: String!
    image: String!
  }

  type Mutation {
    createArticle(input: ArticleInput): Article!
    deleteArticle(id:ID): Article!
    deleteArticles(id:ID): Article!
  }

  input ArticleInput {
    title: String!
    description: String!
    image: String
    content: String!
    userId: String!
    tags:[TagInput]!
    categories:[CategoryInput]
  }

`
