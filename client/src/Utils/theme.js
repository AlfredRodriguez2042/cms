import { red } from '@material-ui/core/colors'
import { createMuiTheme } from '@material-ui/core/styles'

// A custom theme for this app
const theme = createMuiTheme({
  typography: {
    fontFamily: 'Josefin Sans',
  },
  palette: {
    primary: {
      main: '#2196f3',
      // contrastText: '#53575A'
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
    textSecondary: {
      main: '#53575A', //"#383a42"
    },
  },
})

export default theme
