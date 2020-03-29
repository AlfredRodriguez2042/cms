export default `
  type Query {
    Category(id:ID):Category
    Categories:[Category]
  }

  type Category {
    id:ID
    name: String
    articles:[Article]
  }

  input CategoryInput {
    name: String!
  }

`
