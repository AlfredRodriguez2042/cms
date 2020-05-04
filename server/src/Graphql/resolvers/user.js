//  import { checkAdmin, isAuth, checkAuth } from '../../Utils/auth'
import controller from '../../Controllers/User'

export default {
  Query: {
    User: (_, { id }, { userLoader }) => {
      return controller.User(id, userLoader)
    },
    Users: () => {
      // checkAuth(req, res)
      return controller.Users()
    },
    UsersOnline: () => {
      return controller.UsersOnline()
    },
  },
  Mutation: {
    createUser: (_, { input }, { url, client }) => {
      return controller.UserCreate(input, url, client)
    },
    updateUser: async (_, { input }) => {
      return controller.UpdateUser(input)
    },
    deleteUser: async (_, { id }) => {
      return controller.DeleteUser(id)
    },
  },
}
