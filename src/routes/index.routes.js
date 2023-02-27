import events from 'events'
events.EventEmitter.defaultMaxListeners = 100

import { Router, json, urlencoded } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import 'express-async-errors'
import compression from 'compression'
import timeout from 'connect-timeout'
import { NotFoundMiddleware, ErrorMiddleware } from '../middlewares/index.js'
import { searchDataByDestinationRoutes } from './index.js'

export default ({ config }) => {
  const { SERVER_TIMEOUT } = config
  const router = Router()
  const apiRouter = Router()

  apiRouter
    .use(json())
    .use(cors())
    .use(helmet())
    .use(compression())
    .use(urlencoded({ extended: true }))
    .use(timeout(SERVER_TIMEOUT))

  apiRouter.use('/search', searchDataByDestinationRoutes())

  router.use('/v1', apiRouter)
  router.use(NotFoundMiddleware)
  router.use(ErrorMiddleware)

  return router
}
