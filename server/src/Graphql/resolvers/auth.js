import controller from '../../Controllers/Auth'
import { isAuth } from '../../Utils/auth'

export default {
  Mutation: {
    Login: (_, { input }, { req, res }) => {
      return controller.Login(input, req, res)
    },
    checkLoggedIn: (parent, args, { req }) => {
      isAuth(req)
      return controller.CheckLoggedIn(req)
    },
    Logout: async (_, __, { req, res }) => {
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
}
