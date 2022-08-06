import meetupServices from '../services/meetupServices.js';
import { StatusCodes } from 'http-status-codes';

const meetupControllers = {
  async add(request, response) {
    const data = { ...request.body, organizerId: request.user.id };
    const newMeetup = await meetupServices.add(data);
    response.status(StatusCodes.CREATED).send(newMeetup);
  },

  async readAll(request, response) {
    const meetups = await meetupServices.readAll();
    response.status(StatusCodes.OK).send(meetups);
  },

  async readOne(request, response) {
    const id = request.params.id;
    const meetup = await meetupServices.readByParameter({ id });
    response.status(StatusCodes.OK).send(meetup);
  },

  async update(request, response) {
    const id = request.params.id;
    const changes = request.body;
    const updatedMeetup = await meetupServices.update(id, changes);
    response.status(StatusCodes.OK).send(updatedMeetup);
  },

  async delete(request, response) {
    const id = request.params.id;
    const deletedMeetup = await meetupServices.delete(id);
    response.status(StatusCodes.NO_CONTENT).send(deletedMeetup);
  },
};

export default meetupControllers;
