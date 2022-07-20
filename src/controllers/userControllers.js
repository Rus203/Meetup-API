import { StatusCodes } from 'http-status-codes'
import userServices from '../services/userServices.js'

export const userControllers = {
  async read(request, response) {
    const { id } = request.params
    const user = await userServices.readByParameters({ id })
    response.status(StatusCodes.OK).send(user)
  },

  async readAll(request, response) {
    const users = await userServices.readAll()
    response.status(StatusCodes.OK).send(users)
  },

  async update(request, response) {
    const { id } = request.params
    const changes = request.body
    const changedUser = await userServices.update(id, changes)
    response.status(StatusCodes.OK).send(changedUser)
  },

  async updateAll(request, response) {
    const changes = request.body
    const changedUser = await userServices(id, changes)
    response.status(StatusCodes.OK).send(changedUser) 
  },
  async delete(request, response) {
    const { id } = request.params
    await userServices.delete(id)
    response.status(StatusCodes.NO_CONTENT).send()
  },
}

export default userControllers
