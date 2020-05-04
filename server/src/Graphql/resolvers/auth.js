import controller from '../../Controllers/Auth'
import userController from '../../Controllers/User'
import { isAuth } from '../../Utils/auth'

export default {
  Mutation: {
    Login: (_, { input }, { req, res, pubsub }) => {
      return controller.Login(input, req, res, pubsub)
    },
    checkLoggedIn: (parent, args, { req, res }) => {
      isAuth(req)
      return controller.CheckLoggedIn(req, res)
    },
    Logout: async (_, { input }, { req, res }) => {
      userController.UpdateUser(input)
      req.session.destroy('qid')
      res.cookie('x-token', 'logout...', {
        httpOnly: true,
        expires: new Date(Date.now() + 1),
      })
      res.cookie('qid', 'logout...', {
        httpOnly: true,
        expires: new Date(Date.now() + 1),
      })
      return true
    },
  },
  Subscription: {
    userOnline: {
      subscribe: (_, __, { pubsub }) => pubsub.asyncIterator('user_online'),
    },
  },
}
