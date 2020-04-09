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
  listArtciles: [],
  type: 'all',
  categoryList: [],
  tagList: tag,
  text: '',
}

console.log(initialState.articles)
export default function articleReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ARTICLES:
      return {
        ...state,
        articles: action.payload,
        tagList: generateColor(action.payload.tags),
        //    categoryList: payload.category
      }
    case SEARCH_ARTICLE:
      const regex = new RegExp(`^${action.payload}`, 'i')
      console.log(regex)
      return {
        ...state,
        listArtciles: state.articles.filter((q) => regex.test(q.title)),
      }

    // case GET_ARTICLES:
    //   const categoryList = generateColor(payload)
    //   return { ...state, categoryList }

    default:
      return state
  }
}
