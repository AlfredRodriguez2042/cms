import { split } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'
import { jwtstorage } from '../../Redux/Reducers/User'

const host = window.location.host
let uri1
let uri2
if (process.env.NODE_ENV !== 'production') {
  uri1 = 'http://localhost:5500/graphql/'
  uri2 = `ws://localhost:5500/graphql`
} else {
  uri1 = '/graphql'
  uri2 = `ws://${host}/`
}

const httpLink = new HttpLink({
  credentials: 'include',
  uri: uri1,
  // puedes enviar los token en los headers en cada request
  // headers: {
  //   authorization: `Bearer ${AUTH_TOKEN}`
  // },
  onError: ({ graphQLErrors, networkError }) => {
    console.log(graphQLErrors)
    console.log(networkError)
    if (networkError.statusCode === 401) {
      console.log('error 4001')
    }
  },
})

const wsLink = new WebSocketLink({
  uri: uri2,
  options: {
    reconnect: true,
    connectionParams: {
      token: jwtstorage,
    },
  },
})

export const links = split(
  // split based on operation type
  ({ query }) => {
    const definition = getMainDefinition(query)
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    )
  },
  wsLink,
  httpLink
)
