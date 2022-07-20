import { models } from '../models/index.js'

const refreshTokenServices = {
  async add(data) {
    return models.refreshTokenModel.create(data)
  },

  async readByParameters(parameters) {
    return models.refreshTokenModel.findOne({ where: parameters })
  },

  async update(parameters, changes) {
    return models.refreshTokenModel.update(changes, { where: parameters })
  },

  async delete(parameters) {
    return models.refreshTokenModel.destroy({ where: parameters })
  },
}

export default refreshTokenServices
