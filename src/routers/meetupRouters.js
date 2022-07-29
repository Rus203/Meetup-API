import { Router } from 'express';
import meetupControllers from '../controllers/meetupControllers.js';

import asyncWrapperMiddleware from '../middleware/asyncWrapperMiddleware.js';
import isUUIDMiddleware from '../middleware/isUUIDMiddleware.js';

const meetupRouters = Router();

meetupRouters.get('/', meetupControllers.readAll);
meetupRouters.post('/', asyncWrapperMiddleware(meetupControllers.add));

meetupRouters.use('/:id/', isUUIDMiddleware);

meetupRouters.get('/:id', asyncWrapperMiddleware(meetupControllers.readOne));
meetupRouters.put('/:id', asyncWrapperMiddleware(meetupControllers.update));
meetupRouters.delete('/:id', asyncWrapperMiddleware(meetupControllers.delete));

export default meetupRouters;
