import { models } from '../models/index.js';

const roleModel = models.role;

const roleServices = {
  async add(data) {
    return roleModel.create(data);
  },

  async addRoleToUser(user, role) {
    return user.addRole(role);
  },

  async getAllRoleOfUser(user) {
    const allHisRoles = await user.getRoles();
    const roles = [];
    for (const key in allHisRoles) {
      roles.push(allHisRoles[key].name);
    }
    return roles;
  },

  async readAll() {
    return roleModel.findAll();
  },

  async readByParameter(parameter) {
    return roleModel.findOne({ where: parameter });
  },
};

export default roleServices;
