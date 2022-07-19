import { Router } from 'express'
import userControllers from '../controllers/userControllers.js'
import { userErrorHandleMiddleware } from '../middleware/userErrorHandleMiddleware.js'

const userRouters = Router()

userRouters
  .route('/')
  .get(userControllers.readAll)
  .put(userErrorHandleMiddleware(userControllers.updateAll))

userRouters
  .route('/:id')
  .get(userControllers.read)
  .patch(userErrorHandleMiddleware(userControllers.update))
  .delete(userErrorHandleMiddleware(userControllers.delete))


export default userRouters