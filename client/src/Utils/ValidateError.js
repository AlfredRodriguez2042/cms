export const validateError = error => {
  try {
    if (error) {
      const { graphQLErrors, networkError } = error

      if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
          )
        )
      if (networkError) {
        console.log(`[Network error]: ${networkError}`)
        console.log(networkError.result.errors)
      }
    }
  } catch (error) {
    console.log(error)
  }
}
