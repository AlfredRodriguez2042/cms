import { SchemaDirectiveVisitor } from 'apollo-server-express'
import { defaultFieldResolver } from 'graphql'

class PasswordDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field) {
    const { resolve = defaultFieldResolver } = field

    const { min, max } = this.args

    field.resolve = async (...args) => {
      const result = await resolve.apply(this, args)

      if (typeof result === 'string') {
        const characters = Math.floor(Math.random() * max + min)

        return '*'.repeat(characters)
      }
      return result
    }
  }
}

export default PasswordDirective
