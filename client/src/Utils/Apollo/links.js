import { split } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'
import { jwtstorage } from '../../Redux/Reducers/User'

const host = window.location.host
const socket =
  process.env.NODE_ENV !== 'production'
    ? `ws://localhost:5500/subscription`
    : `ws://subscriptions`
const api =
  process.env.NODE_ENV !== 'production' ? 'http://localhost:5500/api/' : '/api'

const httpLink = new HttpLink({
  credentials: 'include',
  uri: api,
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
  uri: socket,
  options: {
    reconnect: true,
    // connectionParams: {
    //   token: jwtstorage,
    // },
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
