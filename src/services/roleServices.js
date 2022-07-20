import { models } from '../models/index.js'

export const roleServices = {
  async add(data) {
    return models.roleModel.create(data)
  },

  async readByName(name) {
    return models.roleModel.findOne({where: { name }})
  },

  async getRolesOfUser (user) {
    const allHisRoles = await user.getRoles()
    const roles = []
    for (const key in allHisRoles) {
      roles.push(allHisRoles[key].name)
    }
    return roles
  }
}