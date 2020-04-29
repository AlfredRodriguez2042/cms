import { SchemaDirectiveVisitor } from 'apollo-server-express'
import { defaultFieldResolver } from 'graphql'

import { isAuth, checkAdmin } from '../auth'
//  la segun la doc. en caso de tener un objeto o un field
class AuthDirective extends SchemaDirectiveVisitor {
  visitObject(type) {
    this.ensureFieldsWrapped(type)
    type._requiredAuthRole = this.args.requires
  }

  visitFieldDefinition(field, details) {
    this.ensureFieldsWrapped(details.objectType)
    field._requiredAuthRole = this.args.requires
  }
  ensureFieldsWrapped(objectType) {
    if (objectType._authFieldsWrapped) return
    objectType._authFieldsWrapped = true

    const fields = objectType.getFields()

    Object.keys(fields).forEach((fieldName) => {
      const field = fields[fieldName]
      const { resolve = defaultFieldResolver } = field
      field.resolve = async (...args) => {
        const requiredRole =
          field._requiredAuthRole || objectType._requiredAuthRole
        // si no requiere un rol lo devuelve
        if (!requiredRole) {
          return resolve.apply(this, args)
        }
        const context = args[2]
        //  si es admin
        if (requiredRole !== 'user') {
          checkAdmin(context.req)
          return resolve.apply(this, args)
        }
        // si es tipo user
        isAuth(context.req)
        return resolve.apply(this, args)
      }
    })
  }
}

export default AuthDirective
