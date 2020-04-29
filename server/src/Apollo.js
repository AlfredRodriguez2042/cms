import { ApolloServer, PubSub } from 'apollo-server-express'
import { schema } from './Graphql'
import AuthDirective from './Utils/directive'
import { createDirective } from 'apollo-directive'
import { client } from './Utils/Redis'
import { userLoader } from './Utils/Loaders'
import { validationRules, formatError } from './Middlewares/auth'

const pubsub = new PubSub()
const apolloServer = new ApolloServer({
  schema,
  introspection: process.env.NODE_ENV === 'development',
  tracing: process.env.NODE_ENV === 'development',
  context: (request) => ({
    req: request.req,
    res: request.res,
    url: request.req
      ? request.req.protocol + '://' + request.req.get('host')
      : '',
    client,
    pubsub,
    userLoader,
  }),
  validationRules:
    process.env.NODE_ENV !== 'development' ? validationRules : [],
  formatError,
})

export default apolloServer
