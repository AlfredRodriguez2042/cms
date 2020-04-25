import Article from '../../Models/article'
import Likes from '../../Models/likes'

export default {
  Mutation: {
    likeArticle: async (_, { id }, { req }) => {
      const article = await Article.findByPk(id, {
        include: [{ association: 'likes' }],
      })
      if (!article) {
        throw new Error('article not exits')
      }
      if (!article.likes.find((like) => like.userId === req.session.userId)) {
        console.log('creando')
        await Likes.create({
          articleId: id,
          userId: req.session.userId,
        })
        return article
      } else {
        console.log('destroy')

        // await Likes.destroy({ where: { article_id: id } })
      }
      return article
    },
  },
}
