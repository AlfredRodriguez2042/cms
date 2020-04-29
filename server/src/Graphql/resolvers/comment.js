import Comment from '../../Models/comment'

const COMMENT_ADDED = 'COMMENT_ADDED'

export default {
  Query: {
    Comments: async () => {
      const comment = await Comment.findAll({
        include: [{ association: 'user' }],
      })
      return comment
    },
    Comment: async (_, { id }) => {
      const comment = await Comment.findByPk(id)
      return comment
    },
  },
  Mutation: {
    createComment: async (_, { input }, { pubsub }) => {
      const comment = await Comment.create(input, {
        include: [
          {
            association: 'article',
          },
          {
            association: 'user',
          },
        ],
      })
      await comment.reload({ include: [{ association: 'user' }] })

      pubsub.publish(COMMENT_ADDED, {
        newComment: comment,
      })
      return comment
    },
    deleteComment: async (_, { id }) => {
      const comment = await Comment.destroy({ where: id })
      return comment
    },
    likeArticle: async () => {},
    likeComment: async () => {},
  },
  Subscription: {
    newComment: {
      subscribe: (_, __, { pubsub }) => pubsub.asyncIterator(COMMENT_ADDED),
    },
  },
}
