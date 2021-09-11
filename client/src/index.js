import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import ApolloClient from './Apollo'
import './Scss/main.scss'

ReactDOM.render(
  <React.StrictMode>
    <ApolloClient />
  </React.StrictMode>,
  document.getElementById('root')
)
reportWebVitals()
