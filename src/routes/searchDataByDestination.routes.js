import { Router } from 'express'
import routerCallback from './router-callback.js'
import { ValidationMiddleware } from '../middlewares/index.js'
import { searchDataByDestinationController } from '../controllers/index.js'

const router = Router()

export default () => {
  router.get('/dataByDestination', [ValidationMiddleware], (request, response) => {
    const { service } = request.headers
    const moduleKey = service
    routerCallback({ request, response, moduleKey, controller: searchDataByDestinationController })
  })

  return router
}
