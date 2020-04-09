import Article from "../../Models/article"
import { checkAuth } from "../../Utils/auth"

const options = {
  include: [
    {
      association: "tags",
      attributes: ["name"]
    },
    {
      association: "categories",
      attributes: ["name"],
      through: { attributes: [] }
    },
    {
      association: "user"
    }
  ],
  attributes: { exclude: ["updatedAt", "user_id"] },
  order: [["createdAt", "DESC"]]
}

export default {
  Query: {
    Article: async (_, { id }) => {
      try {
        const post = await Article.findByPk(id, options)
        return post
      } catch (error) {}
    },
    Articles: async (_, __, { req, res }) => {
      // checkAuth(req, res)
      const posts = await Article.findAll(options)

      return posts
    }
  },
  Mutation: {
    createArticle: async (_, { input }) => {
      const post = await Article.create(input, {
        include: [
          {
            association: "tags"
          },
          {
            association: "categories"
          }
        ]
      })
      return post
    },
    deleteArticle: async (_, { id }) => {
      const post = await Article.destroy({ where: id })
      return post
    }
  }
}
