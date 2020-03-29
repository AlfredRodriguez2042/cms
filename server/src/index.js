import app from './server'
import apolloServer from './Apollo'
import sequelize from './Models'
import { createServer } from 'http'
import v8 from 'v8'
require('@babel/register')({ ignore: [] })

const httpServer = createServer(app)
apolloServer.installSubscriptionHandlers(httpServer)
const PORT = process.env.PORT || 5500

function memory() {
  const totalHeapSize = v8.getHeapStatistics().total_available_size
  const totalHeapSizeGb = (totalHeapSize / 1024 / 1024 / 1024).toFixed(2)
  return console.log('totalHeapSizeGb: ', totalHeapSizeGb)
}
memory()

function main() {
  try {
    sequelize.sync({ force: false }).then(() => {
      httpServer.listen(PORT, () => {
        console.log(
          `>>>   🚀   Server ready at http://localhost:${PORT}${apolloServer.graphqlPath}`
        )
        console.log(
          `>>>   🚀   Subscriptions ready at ws://localhost:${PORT}${apolloServer.subscriptionsPath}`
        )
      })
    })
  } catch (error) {
    console.log(error)
  }
}
main()
