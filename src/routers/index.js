import { Router } from 'express'
import swaggerUi from 'swagger-ui-express'

import { meetupRouter } from './meetupRouter.js'
import authRouter from './authRouter.js'
import userRouters from './usersRouters.js'
import { swaggerDoc } from '../utils/swaggerDoc.js'


export const routing = Router()

routing.get('/', (req, res) => {
  res.send('Welcome to the page')
})


routing.use('/api/meetups', meetupRouter)
routing.use('/api/users', userRouters)
routing.use('/api/docs',  swaggerUi.serve, swaggerUi.setup(swaggerDoc))
routing.use('/api/auth', authRouter)
