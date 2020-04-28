import { v4 } from 'uuid'

// url => context.url
export const ConfirmEmail = async (url, userId, client) => {
  const id = v4()

  await client.set(id, userId, 'ex', 60 * 60 * 24)
  return `${url}/confirm/${id}`
}
