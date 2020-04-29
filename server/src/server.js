import express from 'express'
import helmet from 'helmet'
import compression from 'compression'
import cookieParser from 'cookie-parser'
import apolloServer from './Apollo'
import rateLimit from 'express-rate-limit'
import { sessionOption } from './Utils/Redis'
import { middlewareSession } from './Middlewares/auth'
import { httpsRedirect, wwwRedirect } from './Utils/Redirect'
import { email } from './Routes/email'

require('dotenv').config()

const app = express()
const path = '/graphql'
const corsOptions = {
  credentials: true,
  origin: ['http://localhost:3000', 'http://localhost:5000'],
}

// redirects should be ideally setup in reverse proxy like nignx
if (process.env.NODE_ENV !== 'development') {
  console.log('production')
  app.use('/*', httpsRedirect())

  app.get('/*', wwwRedirect())

  app.use(
    rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100, // limit each IP to 100 requests per windowMs
    })
  )
}

app.use(sessionOption)

app.enable('trust proxy')
app.use(compression())
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(path, middlewareSession)
app.use(cookieParser(process.env.JWT_SECRET))

apolloServer.applyMiddleware({ app, path, cors: corsOptions })

app.get('/confirm/:id', email)

export default app
