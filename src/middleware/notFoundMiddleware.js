import { NotFoundError } from '../errors/NotFoundError.js'

export const notFoundMiddleware = (request, response, next) => {
  next(new NotFoundError("Such a page doesn't exist"))
}
