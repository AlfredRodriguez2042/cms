import { ApolloServer, PubSub } from 'apollo-server-express'
import { schema } from './Graphql'
import AuthDirective from './Utils/directive'
import { createDirective } from 'apollo-directive'
import { client } from './Utils/Redis'
import { validationRules, formatError } from './Middlewares/auth'

const apolloServer = new ApolloServer({
  schema,
  introspection: process.env.NODE_ENV !== 'production',

  context: request => ({
    req: request.req,
    res: request.res,
    url: request.req.protocol + '://' + request.req.get('host'),
    client
  }),
  validationRules: process.env.NODE_ENV !== 'production' ? [] : validationRules,
  formatError
})

export default apolloServer
