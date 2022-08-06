import { validate } from 'uuid';
import BadValueError from '../errors/BadValueError.js';

export const isUUIDMiddleware = (request, response, next) => {
  const id = request.params.id || request.body.id;
  const checkUUid = validate(id);
  if (!checkUUid) {
    next(new BadValueError(`id(${id}) not valid`));
  } else next();
};

export default isUUIDMiddleware;
