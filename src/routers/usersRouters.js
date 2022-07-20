import { Router } from 'express'
import userControllers from '../controllers/userControllers.js'
import { userErrorHandleMiddleware } from '../middleware/userErrorHandleMiddleware.js'
import userSchema from '../schemas/userSchema.js'
import { joiValidationMiddleware } from '../middleware/joiValidateMeetupMiddleware.js'
import authenticationMiddleware from '../middleware/authenticationMiddleware.js'
import authorizationMiddleware from '../middleware/authorizationMiddleware.js'
import roles from '../../roles.js'

const userRouters = Router()

userRouters.use(authenticationMiddleware)
userRouters
  .route('/')
  .get(userControllers.readAll)
  .put(authorizationMiddleware(roles.ORGANIZER), joiValidationMiddleware(userSchema), userErrorHandleMiddleware(userControllers.updateAll))

userRouters
  .route('/:id')
  .get(userControllers.read)
  .patch( authorizationMiddleware(roles.ORGANIZER), joiValidationMiddleware(userSchema), userErrorHandleMiddleware(userControllers.update))
  .delete( authorizationMiddleware(roles.ORGANIZER), userErrorHandleMiddleware(userControllers.delete))


export default userRouters