import { meetupSchema } from '../schemas/meetupSchema.js'

import { ValidationError } from '../errors/ValidationError.js'

export const joiValidationMiddleware = async (request, response, next) => {
  const body = request.body
  try {
     await meetupSchema(request.method).validateAsync(body)
    next()
  } catch (err) {
    next(new ValidationError(err.message))
  }
}
