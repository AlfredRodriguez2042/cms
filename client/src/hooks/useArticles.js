import { useQuery } from '@apollo/react-hooks'
import { translateMarkdown } from '../Utils'
import { GetArtcles } from '../Redux/Actions/Article'
import { useDispatch } from 'react-redux'
import { ARTICLES_QUERY } from '../Graphql/Querys/Articles'

export const useArticles = () => {
  const dispatch = useDispatch()
  const { loading, error, data } = useQuery(ARTICLES_QUERY, {
    onCompleted: ({ Articles }) => {
      const Posts = Articles.map((item) => {
        const index = item.content.indexOf('<!--more-->')
        item.content = translateMarkdown(item.content.slice(0, index))
        return item
      })
      dispatch(GetArtcles(Posts))
    },
  })
  return { loading, error, data }
}
