import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from './Apollo'
import './Scss/main.scss'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './Utils/theme'
require('dotenv').config()
const RootApp = () => {
  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <ApolloClient />
    </ThemeProvider>
  )
}

ReactDOM.render(<RootApp />, document.getElementById('root'))
