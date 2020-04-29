import { SchemaDirectiveVisitor } from 'apollo-server-express'
import { defaultFieldResolver } from 'graphql'

import { isAuth } from '../auth'

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
    if (objectType._authFieldsWrapped) {
      return (objectType._authFieldsWrapped = true)
    }

    const fields = objectType.getFields()

    Object.keys(fields).forEach((fieldName) => {
      const field = fields[fieldName]
      const { resolve = defaultFieldResolver } = field
      field.resolve = async (...args) => {
        const requiredRole =
          field._requiredAuthRole || objectType._requiredAuthRole
        console.log('reqire', requiredRole)
        if (!requiredRole) {
          console.log('no require')
          return resolve.apply(this, args)
        }
        const context = args[2]

        isAuth(context.req)
        console.log('fin')

        return resolve.apply(this, args)
      }
    })
  }
}

export default AuthDirective
