import { generateColor } from '../../Utils'
import { GET_ARTICLES, SEARCH_ARTICLE } from '../types'

const tag = [
  {
    name: 'node',
  },
  {
    name: 'react',
  },
  {
    name: 'postgres',
  },
  {
    name: 'Angular',
  },
  {
    name: 'redux',
  },
  {
    name: 'mongodb',
  },
  {
    name: 'sql',
  },
]
generateColor(tag)
const initialState = {
  articles: [],
  listArticles: [],
  categoryList: [],
  tagList: tag,
}

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTICLES:
      return {
        ...state,
        articles: action.payload,
        tagList: generateColor(action.payload.tags),
        //    categoryList: payload.category
      }
    case SEARCH_ARTICLE:
      const regex = new RegExp(`^${action.payload.title}`, 'i')
      return {
        ...state,
        listArticles: state.articles.filter((q) => regex.test(q.title)),
      }

    // case GET_ARTICLES:
    //   const categoryList = generateColor(payload)
    //   return { ...state, categoryList }

    default:
      return state
  }
}

export default articleReducer
