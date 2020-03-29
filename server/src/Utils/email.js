import uuid from "uuid"

// url => context.url
export const ConfirmEmail = async (url, userId, redis) => {
  const id = uuid.v4()
  await redis.set(id, userId, "ex", 60 * 60 * 24)
  return `${url}/confirm/${id}`
}
