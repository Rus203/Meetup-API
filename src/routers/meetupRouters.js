import { Router } from 'express';
import meetupControllers from '../controllers/meetupControllers.js';
import participantControllers from '../controllers/participantControllers.js';
import roles from '../../roles.js';

import asyncWrapperMiddleware from '../middleware/asyncWrapperMiddleware.js';
import isUUIDMiddleware from '../middleware/isUUIDMiddleware.js';
import joiValidateMiddleware from '../middleware/joiValidateMiddleware.js';
import authenticationMiddleware from '../middleware/authenticationMiddleware.js';
import authorizationMiddleware from '../middleware/authorizationMiddleware.js';

import {
  createdMeetupSchema,
  updatedMeetupSchema,
} from '../DTO/meetupSchema.js';

const meetupRouters = Router();

meetupRouters.use(authenticationMiddleware);
// by default, all registered users have a user role, because there is no need to check them

meetupRouters.get('/', meetupControllers.readAll);
meetupRouters.post(
  '/',
  joiValidateMiddleware(createdMeetupSchema),
  authorizationMiddleware(roles.MANAGER),
  asyncWrapperMiddleware(meetupControllers.add)
);

meetupRouters.use('/:id/', isUUIDMiddleware);

meetupRouters.post(
  '/:id',
  asyncWrapperMiddleware(participantControllers.addParticipant)
);
meetupRouters.get(
  '/:id/participants',
  asyncWrapperMiddleware(participantControllers.readParticipantsOfMeetup)
);

meetupRouters.get('/:id', asyncWrapperMiddleware(meetupControllers.readOne));
meetupRouters.put(
  '/:id',
  joiValidateMiddleware(updatedMeetupSchema),
  authorizationMiddleware(roles.MANAGER),
  asyncWrapperMiddleware(meetupControllers.update)
);
meetupRouters.delete(
  '/:id',
  authorizationMiddleware(roles.MANAGER),
  asyncWrapperMiddleware(meetupControllers.delete)
);

export default meetupRouters;
