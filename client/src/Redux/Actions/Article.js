import {
  GET_ARTICLES,
  GET_ARTICLES_ERROR,
  SEARCH_ARTICLE,
  FILTER_ARTICLE,
} from '../types'

export const GetArtcles = (Posts) => {
  return (dispatch) => {
    try {
      dispatch({
        type: GET_ARTICLES,
        payload: Posts,
      })
    } catch (error) {
      dispatch({
        type: GET_ARTICLES_ERROR,
        payload: error.data,
      })
    }
  }
}

export const SearchArticle = (input) => {
  return (dispatch) => {
    try {
      dispatch({
        type: SEARCH_ARTICLE,
        payload: input,
      })
    } catch (error) {}
  }
}

export const FilterArticles = (posts, categories) => {
  return (dispatch) => {
    try {
      dispatch({
        type: FILTER_ARTICLE,
        payload: posts.filter((c) => c.tags === categories),
      })
    } catch (error) {}
  }
}
