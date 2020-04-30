import { ApolloServer, PubSub } from 'apollo-server-express'
import { schema } from './Graphql'
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
    //  eslint-disable-next-line
    url: request.req?.protocol + '://' + request.req?.get('host'),
    client,
    pubsub,
    userLoader,
  }),
  subscriptions: {
    onConnect: (connectionParams, webSocket, context) => {
      const { token } = connectionParams
      webSocket.on('Login', (soket) => {
        console.log(soket)

        soket.broadcast.emit('Login', 'user has login')
      })

      if (token) {
        context.socket.emit('Login', 'welcome')
      }
    },
    onDisconnect: () => {},
  },
  validationRules:
    process.env.NODE_ENV !== 'development' ? validationRules : [],
  formatError,
})

export default apolloServer
