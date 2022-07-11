import { Router } from 'express'
import { meetupControllers } from '../controllers/meetupControllers.js'

export const meetupRouter = Router()

meetupRouter.route('/meetups')
  .get(meetupControllers.readAll) //  get all the users
  .post(meetupControllers.add) // add a new user

meetupRouter
  .route('/meetups/:id')
  .get(meetupControllers.read) // get a particular user by id
  .put(meetupControllers.update) // change user
  .patch(meetupControllers.update) // modify user partially
  .delete(meetupControllers.delete) // delete a user by id
