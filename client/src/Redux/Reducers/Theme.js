const APLY_THEME = 'APLY_THEME'

const initialState = {
  theme: null,
}

const Theme = (state = initialState, { type, payload }) => {
  switch (type) {
    case APLY_THEME:
      return Object.assign({}, { theme: payload })

    default:
      return state
  }
}
export default Theme
