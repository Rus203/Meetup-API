import { models } from '../models/index.js';

const userModel = models.user;

const userServices = {
  async add(data) {
    const newUser = await userModel.create(data);
    return this.readByParameter({ id: newUser.id });
  },

  async readAll() {
    return userModel.findAll({
      attributes: ['id', 'name', 'login'],
    });
  },

  async readByParameter(parameter) {
    return userModel.findOne({
      where: parameter,
      attributes: ['id', 'name', 'login'],
    });
  },

  async delete(id) {
    const deletedUser = await this.readByParameter({ id });
    await userModel.destroy({ where: { id } });
    return deletedUser;
  },
};

export default userServices;
