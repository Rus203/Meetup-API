import { Router } from 'express'
import { meetupControllers } from '../controllers/meetupControllers.js'
import { isContentTypeJsonMiddleware } from '../middleware/isContentTypeJsonMiddleware.js'
import { userErrorHandleMiddleware } from '../middleware/userErrorHandleMiddleware.js'

export const meetupRouter = Router()

meetupRouter
  .route('/meetups')
  .get(userErrorHandleMiddleware(meetupControllers.readAll)) //  get all the users
  .post(
    userErrorHandleMiddleware(isContentTypeJsonMiddleware),
    userErrorHandleMiddleware(meetupControllers.add)
  ) // add a new user

meetupRouter
  .route('/meetups/:id')
  .get(userErrorHandleMiddleware(meetupControllers.read)) // get a particular user by id
  .put(
    userErrorHandleMiddleware(isContentTypeJsonMiddleware),
    userErrorHandleMiddleware(meetupControllers.update)
  )
  // change user
  .patch(
    userErrorHandleMiddleware(isContentTypeJsonMiddleware),
    userErrorHandleMiddleware(meetupControllers.update)
  ) // modify user partially
  .delete(userErrorHandleMiddleware(meetupControllers.delete)) // delete a user by id
