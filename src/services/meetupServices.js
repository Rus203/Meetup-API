import { NotFoundError } from '../errors/NotFoundError.js'
import { NotUniqueError } from '../errors/NotUniqueError.js'
import { models } from '../models/index.js'

export const meetupServices = {
  async add(data) {
    return models.meetupModel.create(data)
  },

  async readAll() {
    return models.meetupModel.findAll()
  },

  async readById(id) {
    const meetup = await models.meetupModel.findByPk(id)
    if (!meetup) {
      throw new NotFoundError(`Doesn't exist such id: ${id}`)
    }
    return meetup
  },

  async update(id, changes) {
    const allMeetups = await this.readAll()
    allMeetups.forEach(item => {
      if (item.id === changes.id) {
        throw new NotUniqueError(`new id must be unique`)
      }
    })
    const status = await models.meetupModel.update(changes, { where: { id: id } })
    if (!status) {
      throw new NotFoundError(`Doesn't exist such id: ${id}`)
    }
    return this.readById(id)
  },

  async updateAll(changes) {
    const allMeetups = await this.readAll()
    const hasId = allMeetups.some(item => item.id == changes.id)
    if (hasId) {
      await models.meetupModel.update(changes, { where: { id: changes.id } })
      return this.readById(changes.id)
    } else return this.add(changes)
  },

  async delete(id) {
    const status = await models.meetupModel.destroy({ where: { id: id } })
    if (!status) {
      throw new NotFoundError(`Doesn't exist such id: ${id}`)
    }
  },
}
