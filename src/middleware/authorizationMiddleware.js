import ForbiddenError from '../errors/ForbiddenError.js'

const authorizationMiddleware = role => {
  return (request, response, next) => {
    if (!request.user.roles.includes(role)) {
      next(new ForbiddenError('You have no enough permission'))
    } else next()
  }
}

export default authorizationMiddleware
