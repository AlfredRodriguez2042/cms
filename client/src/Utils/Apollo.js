import React from 'react'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { ApolloProvider } from '@apollo/react-hooks'
import App from '../App'

const link = new HttpLink({
  credentials: 'include',
  uri: 'http://localhost:5500/graphql',
  onError: ({ graphQLErrors, networkError }) => {
    if (networkError.statusCode === 401) console.log('logout')
  }
})

const client = new ApolloClient({
  link,
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__)
})

const WrappedApp = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)

export default WrappedApp
