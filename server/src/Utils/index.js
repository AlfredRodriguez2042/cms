export default (ctx, value) => {
  const authorization =
    ctx.request && ctx.request.headers && ctx.request.headers.authorization

  if (!authorization) {
    throw new AuthenticationError('Unauthorized access!')
  }

  const token = authorization.replace('Bearer ', '')

  const decodedToken = jwt.verify(token, jwtSecret)

  const mandatoryRoles = value.split(',').map(s => s.trim())

  if (decodedToken && decodedToken.user && decodedToken.user.roles) {
    const { roles } = decodedToken.user
    const rolesIntersection = roles.filter(role =>
      mandatoryRoles.includes(role)
    )

    if (rolesIntersection.length === 0) {
      throw new AuthenticationError('Invalid role!')
    }

    return rolesIntersection
  }

  throw new AuthenticationError('Invalid token!')
}
