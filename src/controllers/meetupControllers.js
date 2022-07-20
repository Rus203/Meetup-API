import { StatusCodes } from 'http-status-codes'

import { meetupServices } from '../services/meetupServices.js'

export const meetupControllers = {
  async add(request, response) {
    const newMeetup = await meetupServices.add(request.body)
    response.status(StatusCodes.CREATED).send(newMeetup)
  },

  async read(request, response) {
    const id = request.params.id
    const meetup = await meetupServices.readById(id)
    response.status(StatusCodes.OK).send(meetup)
  },

  async readAll(request, response) {
    if (request.query.sort) {
      let sort = request.query.sort.split(',')
      const meetups = await meetupServices.readAll(null, sort)
      response.status(StatusCodes.OK).send(meetups)
    } else {
      const filter = request.query
      const meetups = await meetupServices.readAll(filter, null)
      response.status(StatusCodes.OK).send(meetups)
    }
  },

  async update(request, response) {
    const id = request.params.id
    const changes = request.body
    const changedMeetup = await meetupServices.update(id, changes)
    response.status(StatusCodes.OK).send(changedMeetup)
  },

  async updateAll(request, response) {
    const changes = request.body
    const changedMeetup = await meetupServices.updateAll(changes)
    response.status(StatusCodes.OK).send(changedMeetup)
  },

  async delete(request, response) {
    const id = request.params.id
    await meetupServices.delete(id)
    response.status(StatusCodes.NO_CONTENT).send()
  },
}
