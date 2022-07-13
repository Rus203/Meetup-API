import { Router } from 'express'
import { meetupControllers } from '../controllers/meetupControllers.js'
import { isContentTypeJsonMiddleware } from '../middleware/isContentTypeJsonMiddleware.js'
import { userErrorHandleMiddleware } from '../middleware/userErrorHandleMiddleware.js'
import { joiValidationMiddleware } from '../middleware/joiValidateMeetupMiddleware.js'
import { validateUUIDMiddleware } from '../middleware/validateUUIDMiddleware.js'

export const meetupRouter = Router()

meetupRouter.get(
  '/meetups',
  userErrorHandleMiddleware(meetupControllers.readAll)
) //  get all the users


meetupRouter
  .route('/meetups')
  .post(
    joiValidationMiddleware,
    userErrorHandleMiddleware(isContentTypeJsonMiddleware),
    userErrorHandleMiddleware(meetupControllers.add)
  ) // add a new user
  .put(
    validateUUIDMiddleware,
    joiValidationMiddleware,
    userErrorHandleMiddleware(isContentTypeJsonMiddleware),
    userErrorHandleMiddleware(meetupControllers.updateAll)
  ) // change user

meetupRouter
  .use('/meetups/:id', validateUUIDMiddleware)
  .route('/meetups/:id')
  .get(userErrorHandleMiddleware(meetupControllers.read)) // get a particular user by id
  .patch(
    userErrorHandleMiddleware(isContentTypeJsonMiddleware),
    joiValidationMiddleware,
    userErrorHandleMiddleware(meetupControllers.update)
  ) // modify user partially
  .delete(userErrorHandleMiddleware(meetupControllers.delete)) // delete a user by id
