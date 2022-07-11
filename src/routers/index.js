import { Router } from 'express'

import { meetupRouter } from './meetupRouter.js'

import { notFoundMiddleware } from '../middleware/notFoundMiddleware.js'
import { errorHandleMiddleware } from '../middleware/errorHandleMiddleware.js'

export const routing = Router()

routing.get('/', (req, res) => {
  res.send('Welcome to the page')
})

routing.use('/api/', meetupRouter)

routing.use('/*', notFoundMiddleware)

routing.use(errorHandleMiddleware)
