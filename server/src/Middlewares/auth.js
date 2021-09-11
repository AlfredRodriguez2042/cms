import jwt from 'jsonwebtoken'
import User from '../Models/user'
import depthLimit from 'graphql-depth-limit'
import costAnalyzer from 'graphql-cost-analysis'

//  !important al actualizar librerias
// todo: Aveces cambia o falla el split de 2 cookies paso a 3 y le pone ; al final

export const middlewareSession = async (req, res, next) => {
  try {
    const IsAuthorization = req.session.userId
    if (!IsAuthorization) {
      req.isAuth = false
      return next()
    }
    let token
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer ')
    ) {
      console.log('localStorage')
      //  eslint-disable-next-line
      token = req.headers.authorization.split(' ')[0]
    } else if (req.headers.cookie) {
      const gettoken = req.headers.cookie.split(' ')[1].split(';')[0]
      //  eslint-disable-next-line
      token = gettoken.split('=')[1]
      console.log('token', token)
    }

    if (!token) {
      req.isAuth = false
      return next()
    }

    const isVerify = jwt.verify(
      token,
      process.env.JWT_SECRET,
      (error, payload) => {
        console.log('jwt', error)
        if (!error) {
          return payload
        }
        return false
      }
    )
    if (!isVerify) {
      console.log('exp')
      req.isAuth = false
      return next()
    }

    const user = await User.findByPk(isVerify.id, {
      include: [
        {
          association: 'roles',
        },
      ],
    })
    if (!user) {
      console.log('!..user')
      req.isAuth = false
      return next()
    }

    req.isAuth = true
    req.user = {
      id: user.id,
      username: user.username,
      role: user.roles[0].name,
    }

    next()
  } catch (error) {
    console.log('errors:')
    next(error)
  }
}

export const formatError = (err) => {
  //  Don't give the specific errors to the client.
  if (err.message.startsWith('Database Error: ')) {
    return new Error('Internal server error')
  }
  //  Otherwise return the original error.  The error can also
  //  be manipulated in other ways, so long as it's returned.
  return err
}
export const validationRules = [
  depthLimit(5),
  costAnalyzer({
    variables: {}, // req.body.variables,
    maximumCost: 1000,
  }),
]
