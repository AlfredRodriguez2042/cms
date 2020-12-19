import { ApolloLink } from 'apollo-link'
import { links } from './Apollo/links'

const AUTH_TOKEN = 'token'
const REFRESH_TOKEN = 'refreshToken'

const csrfMiddlewareLink = new ApolloLink((operation, forward) => {
  if (typeof window.CSRF_TOKEN === 'string') {
    operation.setContext({
      headers: {
        'X-Token': window.CSRF_TOKEN,
      },
    })
  }

  return forward(operation)
})

const afterware = new ApolloLink((operation, forward) => {
  return forward(operation).map((response) => {
    const context = operation.getContext()
    const {
      response: { headers },
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
    if (response.data && response.data.Login) {
    }
    //redireccionar en caso de error
    if (response.errors && response.errors.length > 0) {
      if (response.errors[0].message === 'Error, must be authenticated') {
        localStorage.removeItem('token')
        localStorage.removeItem('refreshToken')
        // window.location = '/'
      }
    }
    return response
  })
})

export const link = ApolloLink.from([
  links,
  afterware,
  // logoutOn401ErrorLink,
  csrfMiddlewareLink,
])
