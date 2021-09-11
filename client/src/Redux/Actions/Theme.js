const APLY_THEME = 'APLY_THEME'

export const themeAction = (theme) => {
  return {
    type: APLY_THEME,
    payload: theme,
  }
}
