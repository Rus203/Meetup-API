import { Op } from 'sequelize';

import { models } from '../models/index.js';

const tokenModel = models.token;

const tokenServices = {
  async readByParameter(parameter) {
    return tokenModel.findOne({ where: parameter });
  },

  async update(changes, id) {
    return tokenModel.update(changes, { where: { id } });
  },

  async delete(id) {
    return tokenModel.destroy({ where: { id } });
  },

  async deleteFiredTokens(exp) {
    console.log('exp ' + exp);
    return tokenModel.destroy({
      where: {
        createdAt: {
          [Op.lte]: new Date(Date.now() - exp),
        },
      },
    });
  },

  async createTokenForUser(user, data) {
    return user.createToken(data);
  },
};

export default tokenServices;
