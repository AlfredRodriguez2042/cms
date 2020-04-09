import { GET_ARTICLES, GET_ARTICLES_ERROR, SEARCH_ARTICLE } from '../types'

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
