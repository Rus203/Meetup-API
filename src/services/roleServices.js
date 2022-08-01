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
    return user.getRoles();
  },

  async readAll() {
    return roleModel.findAll();
  },

  async readByParameter(parameter) {
    return roleModel.findOne({ where: parameter });
  },
};

export default roleServices;
