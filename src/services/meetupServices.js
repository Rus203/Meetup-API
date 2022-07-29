import { models } from '../models/index.js';

import NotFoundError from '../errors/NotFoundError.js';
import BadValueError from '../errors/BadValueError.js';

const meetupModel = models.meetup;

const meetupServices = {
  async add(data) {
    return meetupModel.create(data);
  },

  async readByParameter(parameter) {
    const meetup = await meetupModel.findOne({ where: parameter });
    if (!meetup) {
      throw new NotFoundError('there is no such a meetup');
    }
    return meetup;
  },

  async readAll() {
    return meetupModel.findAll({
      attributes: ['id', 'name', 'description', 'keyWords', 'date', 'place'],
    });
  },

  async update(id, changes) {
    const meetups = await this.readAll();
    const isUniqueId = meetups.every((item) => !item.id !== id);
    if (!isUniqueId) {
      throw new BadValueError('Not unique id');
    }
    const meetup = await meetupModel.update(changes, { where: { id } });
    if (!meetup) {
      throw new NotFoundError('there is no such a meetup');
    }
    return this.readByParameter({ id });
  },

  async delete(id) {
    const deletedMeetup = await meetupModel.destroy({ where: { id } });
    if (!deletedMeetup) {
      throw new NotFoundError('there is no such a meetup');
    }
  },
};

export default meetupServices;
