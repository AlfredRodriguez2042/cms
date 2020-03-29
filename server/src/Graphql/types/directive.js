export default `
  directive @auth(requires: Role) on OBJECT | FIELD_DEFINITION

  enum Role {
  ADMIN
  USER
}


`
