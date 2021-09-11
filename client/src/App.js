import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { useCheckAuth } from './Graphql/Mutations/User'
import 'antd/dist/antd.css'
import Loader from './Components/Loader'
import AppRouter from './Routes'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'

const App = () => {
  const isAuth = useSelector((state) => state.user.token)
  const Theme = useSelector((state) => state.theme.theme)

  // A custom theme for this app
  const theme = createMuiTheme({
    typography: {
      fontFamily: 'Josefin Sans',
    },
    // palette: {
    //   type: Theme ? 'dark' : 'light',
    // },
  })

  const { loading, checkLoggedIn } = useCheckAuth()

  useEffect(() => {
    if (isAuth) {
      checkLoggedIn()
    }
    // window.addEventListener('unload', StoreState)
  }, [isAuth, checkLoggedIn])
  if (loading) {
    return <Loader />
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Router>
          <AppRouter />
        </Router>
      </CssBaseline>
    </ThemeProvider>
  )
}

export default App
