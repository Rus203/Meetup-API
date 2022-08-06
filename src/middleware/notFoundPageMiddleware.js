import NotFoundError from '../errors/NotFoundError.js';

const notFoundPageMiddleware = (request, response, next) => {
  next(new NotFoundError('Page not found'));
};

export default notFoundPageMiddleware;
