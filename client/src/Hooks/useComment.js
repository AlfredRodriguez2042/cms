import { useMutation } from '@apollo/react-hooks'
import { CREATE_COMMENT } from '../Graphql/Mutations/Comments'
import { ARTICLE_QUERY } from '../Graphql/Querys/Articles'

export const useComment = (variables) => {
  const [create, { loading, error }] = useMutation(CREATE_COMMENT, {
    variables,
    update: (proxy, { data }) => {
      const { Article } = proxy.readQuery({
        query: ARTICLE_QUERY,
        variables: { id: variables.articleId },
      })
      proxy.writeQuery({
        query: ARTICLE_QUERY,
        // variables: { id },
        data: {
          Article: {
            ...Article,
            comments: [...Article.comments, data.createComment],
          },
        },
      })
    },
  })
  return { create, loading, error }
}
