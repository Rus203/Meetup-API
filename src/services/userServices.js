import { models } from '../models/index.js';

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
};

export default userServices;
