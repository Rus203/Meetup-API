import { StatusCodes } from 'http-status-codes';
import authServices from '../services/authServices.js';

const authControllers = {
  async singUp(request, response) {
    const candidate = request.body;
    const newUser = await authServices.singUp(candidate);
    response.status(StatusCodes.CREATED).send(newUser);
  },

  async singIn(request, response) {
    const data = request.body;
    const tokens = await authServices.singIn(data);
    response.status(StatusCodes.OK).send(tokens);
  },

  async updateTokens(request, response) {
    const { refreshToken } = request.body;
    const newTokens = await authServices.updateTokens(refreshToken);
    response.status(StatusCodes.OK).send(newTokens);
  },

  async disableTokens(request, response) {
    const { refreshToken } = request.body;
    await authServices.disableTokens(refreshToken);
    response.status(StatusCodes.NO_CONTENT).send();
  },
};

export default authControllers;
