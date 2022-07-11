import { ValidationError } from '../errors/ValidationError.js'

export const isContentTypeJsonMiddleware = (request, response, next) => {
  if (!request.is('application/json')) {
    next(new ValidationError('You should use JSON format'))
  } else next()
}
