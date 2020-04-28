import User from '../../Models/user'
import Role from '../../Models/role'
import { checkAdmin, isAuth, checkAuth } from '../../Utils/auth'
import { ConfirmEmail } from '../../Utils/email'
import { validationUser, verify } from '../../Utils/validation'
const options = [
  {
    association: 'articles',
  },
  {
    association: 'roles',
    attributes: ['name'],
    through: { attributes: [] },
  },
]

export default {
  Query: {
    User: async (_, { id }, { req }) => {
      //  isAuth(req)

      const user = await User.findByPk(id, {
        include: options,
      })
      console.log(user.createdAt)

      return user
    },
    Users: async (_, __, { req, res }) => {
      // checkAuth(req, res)

      const users = await User.findAll({
        include: options,
      })

      return users
    },
  },
  Mutation: {
    createUser: async (_, { input }, { url, client }) => {
      let { roles, ...data } = input
      const { error } = validationUser(data)
      if (error) {
        throw new Error(`${error.message}`)
      }

      const { email, username } = input
      const Email = await User.findOne({ where: { email } })
      const Username = await User.findOne({ where: { username } })
      verify(Email, email)
      verify(Username, username)
      if (!roles) {
        roles = 'user'
      }
      const [role, created] = await Role.findOrCreate({
        where: { name: roles },
      })

      try {
        const user = await User.create(data)

        user.addRole(role)

        const userConfirm = await ConfirmEmail(url, user.id, client)
        console.log(userConfirm)
        return user
      } catch (error) {
        return error.errors[0].message
      }
    },
    updateUser: async (_, { input }) => {
      const { id, ...data } = input
      console.log(data.email)
      const user = await User.update(data, { where: { id } })
      console.log(user)
      return user
    },
    deleteUser: async (_, { id }) => {
      const user = await User.destroy({ where: id })
      return user
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
