import { Router } from 'express';
import meetupControllers from '../controllers/meetupControllers.js';

import asyncWrapperMiddleware from '../middleware/asyncWrapperMiddleware.js';
import isUUIDMiddleware from '../middleware/isUUIDMiddleware.js';
import joiValidateMiddleware from '../middleware/joiValidateMiddleware.js';

import {
  createdMeetupSchema,
  updatedMeetupSchema,
} from '../DTO/meetupSchema.js';

const meetupRouters = Router();

meetupRouters.get('/', meetupControllers.readAll);
meetupRouters.post(
  '/',
  joiValidateMiddleware(createdMeetupSchema),
  asyncWrapperMiddleware(meetupControllers.add)
);

meetupRouters.use('/:id/', isUUIDMiddleware);

meetupRouters.get('/:id', asyncWrapperMiddleware(meetupControllers.readOne));
meetupRouters.put(
  '/:id',
  joiValidateMiddleware(updatedMeetupSchema),
  asyncWrapperMiddleware(meetupControllers.update)
);
meetupRouters.delete('/:id', asyncWrapperMiddleware(meetupControllers.delete));

export default meetupRouters;
