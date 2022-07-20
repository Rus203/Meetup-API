import { Router } from 'express'
import { meetupControllers } from '../controllers/meetupControllers.js'

import { isContentTypeJsonMiddleware } from '../middleware/isContentTypeJsonMiddleware.js'
import { userErrorHandleMiddleware } from '../middleware/userErrorHandleMiddleware.js'
import { joiValidationMiddleware } from '../middleware/joiValidateMeetupMiddleware.js'
import { meetupSchema } from '../schemas/meetupSchema.js'
import { validateUUIDMiddleware } from '../middleware/validateUUIDMiddleware.js'
import authenticationMiddleware from '../middleware/authenticationMiddleware.js'
import authorizationMiddleware from '../middleware/authorizationMiddleware.js'
import roles from '../../roles.js'

export const meetupRouter = Router()

meetupRouter.use(authenticationMiddleware)
meetupRouter.get('/', userErrorHandleMiddleware(meetupControllers.readAll)) //  get all the users

meetupRouter
  .route('/')
  .post(
    joiValidationMiddleware(meetupSchema),
    userErrorHandleMiddleware(isContentTypeJsonMiddleware),
    authorizationMiddleware(roles.ORGANIZER),
    userErrorHandleMiddleware(meetupControllers.add)
  ) // add a new user
  .put(
    validateUUIDMiddleware,
    joiValidationMiddleware(meetupSchema),
    userErrorHandleMiddleware(isContentTypeJsonMiddleware),
    authorizationMiddleware(roles.ORGANIZER),
    userErrorHandleMiddleware(meetupControllers.updateAll)
  ) // change user

meetupRouter
  .use('/:id', validateUUIDMiddleware)
  .route('/:id')
  .get(
    userErrorHandleMiddleware(meetupControllers.read),
  ) // get a particular user by id
  .patch(
    userErrorHandleMiddleware(isContentTypeJsonMiddleware),
    joiValidationMiddleware(meetupSchema),
    authorizationMiddleware(roles.ORGANIZER),
    userErrorHandleMiddleware(meetupControllers.update)
  ) // modify user partially
  .delete( authorizationMiddleware(roles.ORGANIZER), userErrorHandleMiddleware(meetupControllers.delete)) // delete a user by id
