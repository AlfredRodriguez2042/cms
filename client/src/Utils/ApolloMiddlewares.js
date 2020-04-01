import { ApolloLink } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'

const AUTH_TOKEN = 'token'
const REFRESH_TOKEN = 'refreshToken'

const httpLink = new HttpLink({
  credentials: 'include',
  uri: 'http://localhost:5500/graphql',
  // puedes enviar los token en los headers en cada request
  // headers: {
  //   authorization: `Bearer ${AUTH_TOKEN}`
  // },
  onError: ({ graphQLErrors, networkError }) => {
    if (networkError.statusCode === 401) console.log('logout')
  }
})

const csrfMiddlewareLink = new ApolloLink((operation, forward) => {
  if (typeof window.CSRF_TOKEN === 'string') {
    operation.setContext({
      headers: {
        'X-Token': window.CSRF_TOKEN
      }
    })
  }

  return forward(operation)
})

const afterware = new ApolloLink((operation, forward) => {
  return forward(operation).map(response => {
    const context = operation.getContext()
    const {
      response: { headers }
    } = context
    if (headers) {
      const token = headers.get('x-token')
      const refresh_token = headers.get('x-refresh-token')
      if (token) {
        localStorage.setItem(AUTH_TOKEN, token)
        localStorage.setItem(REFRESH_TOKEN, refresh_token)
      }
    }

    // //Se puede manipular datos cuando llegan de graphql
    // if (response.data.user.lastLoginDate) {
    //
    // }
    if (response.data && response.data.Login.token) {
      const token = response.data.Login.token
      localStorage.setItem('x-token', token)
    }
    //redireccionar en caso de error
    if (response.errors && response.errors.length > 0) {
      if (response.errors[0].message === 'Error, must be authenticated') {
        localStorage.removeItem('token')
        localStorage.removeItem('refreshToken')
        window.location = '/login'
      }
    }
    return response
  })
})

export const link = ApolloLink.from([
  afterware,
  // logoutOn401ErrorLink,
  csrfMiddlewareLink,
  httpLink
])
