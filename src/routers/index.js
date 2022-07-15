import { Router } from 'express'

import { meetupRouter } from './meetupRouter.js'

export const routing = Router()

routing.get('/', (req, res) => {
  res.send('Welcome to the page')
})

routing.use('/api/', meetupRouter)
