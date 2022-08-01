import bcrypt from 'bcrypt';

import userServices from './userServices.js';
import tokenServices from './tokenServices.js';
import roleServices from './roleServices.js';
import roles from '../../roles.js';
import {
  generateAccessToken,
  generateRefreshToken,
  decodeToken,
} from '../../utils/tokens.js';

import NotFoundError from '../errors/NotFoundError.js';
import UnauthorizedError from '../errors/UnauthorizedError.js';
import BadValueError from '../errors/BadValueError.js';

const authServices = {
  async singUp(candidate) {
    const { login } = candidate;
    const users = await userServices.readAll();
    const isUniqueLogin = users.every((item) => item.login !== login);
    if (!isUniqueLogin) {
      throw new BadValueError(
        `This login (${login}) has already been occupied`
      );
    }

    const newUser = await userServices.add(candidate);
    if (users.length < 3) {
      const managerRole = await roleServices.readByParameter({
        name: roles.MANAGER,
      });
      await roleServices.addRoleToUser(newUser, managerRole);
    }

    const userRole = await roleServices.readByParameter({ name: roles.USER });
    await roleServices.addRoleToUser(newUser, userRole);
    return newUser;
  },

  async singIn(data) {
    const { login, password } = data;
    const user = await userServices.readByParameter({ login }, true);

    if (!user) {
      throw new NotFoundError('No such login found');
    }

    const isPassword = await bcrypt.compare(password, user.password);

    if (!isPassword) {
      throw new UnauthorizedError('No such password found');
    }

    const accessToken = await generateAccessToken(user);
    const refreshToken = await generateRefreshToken(user);
    await tokenServices.createTokenForUser(user, { content: refreshToken });

    return { accessToken, refreshToken };
  },

  async updateTokens(refToken) {
    const token = await tokenServices.readByParameter({ content: refToken });
    if (!token) {
      throw new NotFoundError('No such refresh token found');
    }

    const userId = decodeToken(token.content).userId;
    const user = await userServices.readByParameter({ id: userId });

    const accessToken = await generateAccessToken(user);
    const refreshToken = await generateRefreshToken(user);

    await tokenServices.update({ content: refreshToken }, token.id);

    return { accessToken, refreshToken };
  },

  async disableTokens(refToken) {
    const token = await tokenServices.readByParameter({ content: refToken });
    if (!token) {
      throw new NotFoundError('No such refresh token found');
    }
    await tokenServices.delete(token.id);
  },
};

export default authServices;
