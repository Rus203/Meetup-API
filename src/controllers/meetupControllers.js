import { StatusCodes, ReasonPhrases } from 'http-status-codes'

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
    const meetups = await meetupServices.readAll()
    response.status(StatusCodes.OK).send(meetups)
  },
  async update(request, response) {
    const id = request.params.id
    const changes = request.body
    const changedMeetup = await meetupServices.update(id, changes)
    response.status(StatusCodes.OK).send(changedMeetup)
  },
  async delete(request, response) {
    const id = request.params.id
    await meetupServices.delete(id)
    response.status(StatusCodes.NO_CONTENT).send()
  }
}