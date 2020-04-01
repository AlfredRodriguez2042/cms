import User from "../../Models/user"
import bcrypt from "bcrypt"
import { createSendToken, checkAuth, isAuth } from "../../Utils/auth"
import { validationLogin } from "../../Utils/validation"

export default {
  Mutation: {
    Login: async (_, { input }, { req, res }) => {
      const { email, password } = input
      const { error } = validationLogin(input)
      if (error) {
        throw new Error(`${error.message}`)
      }
      const user = await User.findOne({
        where: { email },
        include: [
          {
            association: "roles"
          }
        ]
      })
      if (!user) {
        throw new Error("invalid email/password, try again")
      }
      const isMatch = await bcrypt.compare(password, user.password)
      if (!isMatch) {
        throw new Error("invalid email/password, try again")
      }
      req.session.userId = user.id

      const token = createSendToken(user.id, res)

      return { token, user }
    },
    checkLoggedIn: async (parent, ctx, { req, res }) => {
      isAuth(req)
      console.log(req.session.userId)
      const user = await User.findByPk(req.session.userId, {
        include: [
          {
            association: "roles"
          }
        ]
      })

      return { user }
    }
  }
}
