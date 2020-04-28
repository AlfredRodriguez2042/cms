import Article from '../../Models/article'
import sequelize from '../../Models'
import { checkAuth } from '../../Utils/auth'

const options = {
  include: [
    {
      association: 'tags',
      attributes: ['name'],
    },
    {
      association: 'categories',
      attributes: ['name'],
      through: { attributes: [] },
    },
    {
      association: 'user',
    },
    {
      association: 'comments',
      include: [{ association: 'user' }],
      attributes: { exclude: ['updatedAt', 'userId'] },
    },
    {
      association: 'likes',
      include: [{ association: 'user' }],
    },
  ],
  attributes: { exclude: ['updatedAt', 'user_id'] },
  order: [['createdAt', 'DESC']],
}

export default {
  Query: {
    Article: async (_, { id }, { req }) => {
      try {
        const post = await Article.findByPk(id, options)
        await Article.update(
          {
            viewCount: sequelize.literal('view_count +1'),
          },
          { where: { id } }
        )
        return post
      } catch (error) {
        console.log(error)
      }
    },
    Articles: async (_, __, { req, res }) => {
      // checkAuth(req, res)
      console.log(req.query)
      const posts = await Article.findAll(options)

      return posts
    },
  },
  Mutation: {
    createArticle: async (_, { input }) => {
      const post = await Article.create(input, {
        include: [
          {
            association: 'tags',
          },
          {
            association: 'categories',
          },
        ],
      })
      return post.reload(options)
    },
    deleteArticle: async (_, { id }) => {
      const post = await Article.destroy({ where: id })
      return post
    },
  },
  Article: {
    commentNum: (parent) => {
      return parent.comments.length ? parent.comments.length : 0
    },
    likesNum: (parent) => {
      return parent.likes.length ? parent.likes.length : 0
    },
  },
}
