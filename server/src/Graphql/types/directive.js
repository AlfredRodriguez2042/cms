export default `
  scalar UUID
  scalar Date
  directive @auth(requires: Role) on OBJECT | FIELD_DEFINITION
  directive @password(min: Int = 3, max: Int = 20) on FIELD_DEFINITION

  enum Role {
  admin
  user
}


`
