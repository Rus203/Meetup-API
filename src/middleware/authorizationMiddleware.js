import ForbiddenError from '../errors/ForbiddenError.js';
import roleServices from '../services/roleServices.js';

const authorizationMiddleware = (role) => {
  return async (request, response, next) => {
    const roles = await roleServices.getAllRoleOfUser(request.user);
    if (!roles.includes(role)) {
      next(new ForbiddenError('You have no enough permission'));
    } else next();
  };
};

export default authorizationMiddleware;
