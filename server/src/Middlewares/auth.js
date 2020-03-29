import jwt from "jsonwebtoken"
import User from "../Models/user"
import depthLimit from "graphql-depth-limit"
import costAnalyzer from "graphql-cost-analysis"

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
      req.headers.authorization.startsWith("Bearer ")
    ) {
      console.log("localStorage")
      token = req.headers.authorization.split(" ")[1]
    } else if (req.headers.cookie) {
      const gettoken = req.headers.cookie.split(";")[0]
      token = gettoken.split("x-token=")[1]
    }

    if (!token) {
      req.isAuth = false
      return next()
    }

    let isVerify = jwt.verify(
      token,
      process.env.JWT_SECRET,
      (error, payload) => {
        console.log("jwt", error)
        if (!error) {
          return payload
        }
        return false
      }
    )
    if (!isVerify) {
      console.log("exp")
      req.isAuth = false
      return next()
    }

    const user = await User.findByPk(isVerify.id, {
      include: [
        {
          association: "roles"
        }
      ]
    })
    req.user = {
      id: user.id,
      role: user.roles[0].name
    }
    req.isAuth = true
    console.log("user", user.id)

    next()
  } catch (error) {
    console.log("errors:")
    next(error)
  }
}

function authFail(res, next) {
  res.writeHead(401, { "content-type": "text/html" })
  return res.end()
}

export const formatError = err => {
  ///Don't give the specific errors to the client.
  if (err.message.startsWith("Database Error: ")) {
    return new Error("Internal server error")
  }
  // Otherwise return the original error.  The error can also
  // be manipulated in other ways, so long as it's returned.
  return err
}
export const validationRules = [
  depthLimit(5),
  costAnalyzer({
    variables: {}, // req.body.variables,
    maximumCost: 1000
  })
]
