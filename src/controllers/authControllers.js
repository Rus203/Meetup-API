import { StatusCodes } from "http-status-codes";
import authServices from "../services/authServices.js";

const authControllers = {
  async singUp(request, response) {
    const { login , password } = request.body
    const newUser = await authServices.singUp({login, password})
    response.status(StatusCodes.CREATED).send(newUser)
  },

  async singIn(request, response) {
    const { login, password } = request.body 
    const tokens = await authServices.singIn({login, password})
    response.status(StatusCodes.OK).send(tokens)
  },

  async tokens(request, response) {
    const { refreshToken } = request.body
    const newTokens = await authServices.tokens(refreshToken)
    response.status(StatusCodes.OK).send(newTokens)
  },

  async disableTokens(request, response) {
    const { refreshToken } = request.body
    await authServices.disableToken(refreshToken)
    response.status(StatusCodes.NO_CONTENT).send()
  }
}

export default authControllers