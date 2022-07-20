import { models } from '../models/index.js'
import bcrypt from 'bcrypt'

const userServices = {
  async add({ login, password }) {
    password = await bcrypt.hash(password, 12)
    return await models.userModel.create({ login, password })
  },

  async readByParameters(parameters) {
    return models.userModel.findOne({ where: parameters })
  },

  async readAll() {
    return models.userModel.findAll()
  },

  async delete(id) {
    return models.userModel.destroy({ where: { id } })
  },

  async update(id, changes) {
    const allUsers = await this.readAll()
    allUsers.forEach(item => {
      if (item.id === changes?.id) {
        throw new NotUniqueError(`new id must be unique`)
      }
    })

    const status = await models.userModel.update(changes, {
      where: { id },
    })
    if (!status) {
      throw new NotFoundError(`Doesn't exist such id: ${id}`)
    }
    return this.readByParameters({ id })
  },

  async updateAll(changes) {
    const allUsers = await this.readAll()
    const hasId = allUsers.some(item => item.id == changes.id)
    if (hasId) {
      await models.userModel.update(changes, { where: { id: changes.id } })
      return this.readByParameters({ id: changes.id })
    } else return this.add(changes)
  },
}

export default userServices
