import { models } from '../models/index.js';
import NotFoundError from '../errors/NotFoundError.js';
import BadValueError from '../errors/BadValueError.js';

import meetupServices from './meetupServices.js';

const userModel = models.user;

const userServices = {
  async add(data) {
    const newUser = await userModel.create(data);
    return this.readByParameter({ id: newUser.id });
  },

  async readAll() {
    return userModel.findAll();
  },

  async readByParameter(parameter, isPassword = false) {
    const attributes = isPassword
      ? ['id', 'login', 'name', 'password']
      : ['id', 'login', 'name'];
    return await userModel.findOne({
      where: parameter,
      attributes,
    });
  },

  async delete(id) {
    return userModel.destroy({ where: { id } });
  },

  async getUsersOfMeetup(meetup) {
    return (await meetup.getUsers()).map((item) => {
      return { id: item.id, login: item.login, name: item.name };
    });
  },

  async addParticipantToMeetup(id, userId) {
    const meetup = await meetupServices.readByParameter({ id });
    if (!meetup) {
      throw new NotFoundError('there is no such a meetup');
    }
    const user = await this.readByParameter({ id: userId });
    if (!user) {
      throw new NotFoundError('there is no such a user');
    }

    (await this.getUsersOfMeetup(meetup)).forEach((item) => {
      if (item.id === userId)
        throw new BadValueError(
          `This user (userId - ${userId}) has already existed`
        );
    });

    await meetup.addUsers(user);
    const participants = await this.getUsersOfMeetup(meetup);
    return { meetupId: id, participants };
  },

  async readParticipantsOfMeetup(id) {
    const meetup = await meetupServices.readByParameter({ id });
    if (!meetup) {
      throw new NotFoundError('there is no such a meetup');
    }
    return this.getUsersOfMeetup(meetup);
  },
};

export default userServices;
