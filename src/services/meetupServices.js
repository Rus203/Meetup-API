import { NotFoundError } from '../errors/NotFoundError.js'
import { NotUniqueError } from '../errors/NotUniqueError.js'
import { models } from '../models/index.js'

export const meetupServices = {
  add(data) {
    return models.meetup.create(data)
  },

  readAll() {
    return  models.meetup.findAll()
  },

  async readById(id) {
    const meetup = await models.meetup.findByPk(id)
    if (!meetup) {
      throw new NotFoundError(`Doesn't exist such id: ${id}`)
    }
    return meetup
  },

  async update(id, changes) {
    const allMeetups = await this.readAll()
    allMeetups.forEach(item => {
      if(item.id === changes.id) {
        throw new NotUniqueError(`new id must be unique`)
      }
    });
    const status = await models.meetup.update(changes, { where: { id: id } })
    if (!status) {
      throw new NotFoundError(`Doesn't exist such id: ${id}`)
    }
    return this.readById(id)
  },

  async delete(id) {
    const status = await models.meetup.destroy({ where: { id: id } })
    if (!status) {
      throw new NotFoundError(`Doesn't exist such id: ${id}`)
    }
  },
}
