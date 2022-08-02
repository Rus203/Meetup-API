import passport from 'passport';
import UnauthorizedError from '../errors/UnauthorizedError.js';

const authenticationMiddleware = (request, require, next) => {
  return passport.authenticate(
    'jwt',
    { session: false },
    (error, user, info) => {
      if (error) {
        next(new Error('Something was wrong'));
      } else if (!user || info) {
        next(
          new UnauthorizedError('Unfortunately, your cannot enter your account')
        );
      } else {
        request.user = user;
        next();
      }
    }
  )(request, require, next);
};

export default authenticationMiddleware;
