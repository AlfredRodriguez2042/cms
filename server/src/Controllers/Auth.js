import User from '../Models/user'
import bcrypt from 'bcrypt'
import { validationLogin } from '../Utils/validation'
import { createSendToken } from '../Utils/auth'

export default {
  Login: async (input, req, res) => {
    const { email, password } = input
    const { error } = validationLogin(input)
    if (error) {
      throw new Error(`${error.message}`)
    }
    const user = await User.findOne({
      where: { email },
      include: [
        {
          association: 'roles',
        },
      ],
    })
    if (!user) {
      throw new Error('invalid email/password, try again')
    }
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      throw new Error('invalid email/password, try again')
    }
    req.session.userId = user.id

    const token = createSendToken(user.id, res)
    return { token, user }
  },
  CheckLoggedIn: async (req) => {
    const user = await User.findByPk(req.session.userId, {
      include: [
        {
          association: 'roles',
        },
      ],
    })
    return { user }
  },
}
