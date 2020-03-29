import Comment from '../../Models/comment'
import Article from '../../Models/article'

export default {
  Query: {
    Comments: async () => {
      const comment = await Comment.findAll()
      return comment
    }
  },
  Mutation: {
    createComment: async (_, { input }) => {
      const comment = await Comment.create(input)
    },
    deleteComment: async (_, { id }) => {
      const comment = await Comment.destroy({ where: id })
    },
    likeArticle: async () => {},
    likeComment: async () => {}
  }
}
