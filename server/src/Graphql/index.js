import { makeExecutableSchema } from 'apollo-server-express'
import path from 'path'
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge'
import { loadFilesSync } from '@graphql-tools/load-files'
import authDirective from '../Utils/Directives/auth'
import PasswordDirective from '../Utils/Directives/password'

const typeDefs = mergeTypeDefs(loadFilesSync(path.join(__dirname, './types')))
const resolvers = mergeResolvers(
  loadFilesSync(path.join(__dirname, './resolvers'))
)
export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
  schemaDirectives: {
    auth: authDirective,
    password: PasswordDirective,
  },
  resolverValidationOptions: {
    requireResolversForResolveType: false,
  },
  logger: {
    log: (err) => {
      console.log('[GraphQL LOG]:', err)
    },
  },
})
