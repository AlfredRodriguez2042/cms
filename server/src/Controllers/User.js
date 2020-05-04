import User from '../Models/user'
import Role from '../Models/role'
import { ConfirmEmail } from '../Utils/email'
import { sendEmail } from '../Utils/nodemailer'
import { validationUser, verify } from '../Utils/validation'

const options = {
  include: [
    {
      association: 'articles',
    },
    {
      association: 'roles',
      attributes: ['name'],
      through: { attributes: [] },
    },
  ],
}
export default {
  User: async (id, userLoader) => {
    const user = await userLoader.load(id)
    return user
  },
  Users: async () => {
    const users = await User.findAll(options)

    return users
  },
  UsersOnline: async () => {
    const online = await User.findAll({
      where: {
        status: 'active',
      },
    })

    return online
  },
  UserCreate: async (input, url, redis) => {
    //  eslint-disable-next-line
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
    const [role] = await Role.findOrCreate({
      where: { name: roles },
    })

    try {
      const user = await User.create(data)

      user.addRole(role)
      console.log('creando')
      const Url = await ConfirmEmail(url, user.id, redis)
      await sendEmail(Url, email, 'Please Confirm Email')
      console.log('esperando')
      return user
    } catch (error) {
      return error.errors[0].message
    }
  },
  UpdateUser: async (input) => {
    const { id, ...data } = input

    const user = await User.update(data, { where: { id } })

    return user
  },
  DeleteUser: async (id) => {
    const user = await User.destroy({ where: id })
    return user
  },
}
