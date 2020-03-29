import { AuthenticationError } from "apollo-server-express"
import jwt from "jsonwebtoken"

export const isAuth = req => {
  if (!req.session.userId) {
    throw new AuthenticationError("You must be signed in")
  }
}

export const createRefreshToken = (id, res) => {
  const refreshToken = jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "1d"
  })
  res.cookie("x-token", refreshToken, {
    httpOnly: true,
    expires: new Date(Date.now() + 24 * 60 * 60 * 1000)
  })
}
export const checkAuth = (req, res) => {
  if (!req.isAuth) throw new AuthenticationError("Error, must be autenticated")
  let token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer ")
  ) {
    token = req.headers.authorization.split(" ")[1]
  } else if (req.headers.cookie) {
    const gettoken = req.headers.cookie.split(";")[0]
    token = gettoken.split("x-token=")[1]
  }
  const decode = jwt.decode(token)
  createRefreshToken(decode.id, res)
}

export const isAdmin = () => {}

export const checkAdmin = req => {
  if (req.user.role !== "admin")
    throw new Error("Must be admin to perfom that action")
}

export const createSendToken = (id, res) => {
  const token = jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" })
  res.cookie("x-token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + 24 * 60 * 60 * 1000)
  })

  return token
}
