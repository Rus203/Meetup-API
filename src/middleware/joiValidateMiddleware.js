import BadValueError from '../errors/BadValueError.js';

const joiValidateMiddleware = (schema) => {
  return async (request, response, next) => {
    try {
      await schema.validateAsync(request.body);
      next();
    } catch (error) {
      next(new BadValueError(error.message));
    }
  };
};

export default joiValidateMiddleware;
