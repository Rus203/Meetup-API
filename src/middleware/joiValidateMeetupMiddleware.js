import { ValidationError } from '../errors/ValidationError.js'

export const joiValidationMiddleware = schema => {
  return async (request, response, next) => {
    const body = request.body
    try {
      await schema(request.method).validateAsync(body)
      next()
    } catch (err) {
      next(new ValidationError(err.message))
    }
  }
}
