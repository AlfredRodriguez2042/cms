import React from 'react'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from '@apollo/react-hooks'
import { store, persistor } from './Redux/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import App from './App'
import { link } from './Utils/ApolloMiddlewares'

const cache = new InMemoryCache({
  dataIdFromObject: object => object.id || null
}).restore(window.__APOLLO_STATE__)

const resolvers = {
  Mutation: {
    // eslint-disable-next-line no-shadow
    updateNetworkStatus: (_, { isConnected }, { cache }) => {
      cache.writeData({ data: { isConnected } })
      return null
    }
  }
}

const client = new ApolloClient({
  link,
  cache,
  resolvers
})

const apolloClient = () => (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </ApolloProvider>
)

export default apolloClient
