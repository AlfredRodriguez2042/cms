import redis from 'ioredis'
import session from 'express-session'
import connectRedis from 'connect-redis'

require('dotenv').config()

const RedisStore = connectRedis(session)
export const client = redis.createClient({
  port: process.env.REDIS_PORT || 6379, // Redis port
  host: process.env.REDIS_HOST || '127.0.0.1', // Redis host
  //  family: 4, // 4 (IPv4) or 6 (IPv6)
  password: process.env.REDIS_SECRET,
  // db: 0
})
const store = new RedisStore({ client })

export const sessionOption = session({
  name: 'qid',
  store,
  secret: process.env.EXPRESS_SESSION,
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 7,
  },
})

client.on('connect', () => console.log('Redis is connected'))

export const RedisCache = async (model) => {
  await client.del(process.env.REDIS_CACHE_KEY)
  const items = await model.find()
  const StringItems = items.map((item) => JSON.stringify(item))

  const newItems = await client.lpush(
    process.env.REDIS_CACHE_KEY,
    ...StringItems
  )
  return newItems
}
