export default `

  type Query {
    Article(id:ID): Article!
    Articles:[Article!]
  }

  type Article {
    id: ID
    title: String!
    content: String!
    userId: String
    user:UserShort
    image: String!
    createdAt: String!
    comment:[Comment!]
    commentNum: Int
    viewCount: Int
    likes:[Likes!]
    likesNum: Int
    tags:[Tag!]
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
    content: String!
    userId: String!
    tags:[TagInput]!
    categories:[CategoryInput]
  }

`
