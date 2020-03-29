import {
  AuthenticationError,
  SchemaDirectiveVisitor
} from 'apollo-server-express'
import { defaultFieldResolver } from 'graphql'
import { isAuth } from './auth'

class AuthDirec extends SchemaDirectiveVisitor {
  visitObject(type) {
    this.ensureFieldsWrapped(type)
    type._requiredAuthRole = this.args.requires
  }
  // Visitor methods for nested types like fields and arguments
  // also receive a details object that provides information about
  // the parent and grandparent types.
  visitFieldDefinition(field, details) {
    this.ensureFieldsWrapped(details.objectType)
    field._requiredAuthRole = this.args.requires
  }

  ensureFieldsWrapped(objectType) {
    // Mark the GraphQLObjectType object to avoid re-wrapping:
    if (objectType._authFieldsWrapped) return
    objectType._authFieldsWrapped = true

    const fields = objectType.getFields()

    Object.keys(fields).forEach(fieldName => {
      const field = fields[fieldName]
      const { resolve = defaultFieldResolver } = field
      field.resolve = async function(...args) {
        // Get the required Role from the field first, falling back
        // to the objectType if no Role is required by the field:
        const requiredRole =
          field._requiredAuthRole || objectType._requiredAuthRole

        if (!requiredRole) {
          return resolve.apply(this, args)
        }

        const context = args[2]
        const { user } = context // await getUser(context.headers.authToken)
        if (!user.hasRole(requiredRole)) {
          throw new Error('not authorized')
        }

        return resolve.apply(this, args)
      }
    })
  }
}

class AuthDirecti extends SchemaDirectiveVisitor {
  visitFieldDefinition(field) {
    const requiredRole = this.args.requires
    const originalResolve = field.resolve || defaultFieldResolver

    field.resolve = function(...args) {
      const context = args[2]
      const user = context.getUser() || {}
      const isAuthorized = user.role === requiredRole

      if (!isAuthorized) {
        throw new AuthenticationError(
          `You need following role: ${requiredRole}`
        )
      }

      return originalResolve.apply(this, args)
    }
  }
}

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
    // Mark the GraphQLObjectType object to avoid re-wrapping:
    if (objectType._authFieldsWrapped) return
    objectType._authFieldsWrapped = true
    const fields = objectType.getFields()

    Object.keys(fields).forEach(fieldName => {
      const field = fields[fieldName]
      const { resolve = defaultFieldResolver } = field
      field.resolve = async function(...args) {
        // Get the required Role from the field first, falling back
        // to the objectType if no Role is required by the field:
        const requiredRole =
          field._requiredAuthRole || objectType._requiredAuthRole

        if (!requiredRole) {
          console.log('hi')
          //  throw new Error('not autorizated')
          return resolve.apply(this, args)
        }
        console.log('hre', requiredRole)

        const context = args[2]

        isAuth(context.req)
        console.log('fin')

        return resolve.apply(this, args)
      }
    })
  }
}

export default AuthDirective

class RequireAuthDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field) {
    const { resolve = defaultFieldResolver } = field
    const { role } = this.args
    field.resolve = async function(...args) {
      const [, , ctx] = args
      if (ctx.req && ctx.req.user) {
        if (role && (!ctx.req.user.role || !ctx.req.user.role.includes(role))) {
          throw new AuthenticationError(
            'You are not authorized to view this resource.'
          )
        } else {
          const result = await resolve.apply(this, args)
          return result
        }
      } else {
        throw new AuthenticationError(
          'You must be signed in to view this resource.'
        )
      }
    }
  }
}
