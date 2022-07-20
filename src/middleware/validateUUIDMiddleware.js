import { validate } from 'uuid'
import { ValidationError } from '../errors/ValidationError.js'

export const validateUUIDMiddleware = (request, response, next) => {
  const id = request.params.id || request.body.id
  const checkUUid = validate(id)
  if (!checkUUid) {
    next(new ValidationError(`Not valid id: ${id}`))
  } else next()
}
