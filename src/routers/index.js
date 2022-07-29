import { Router } from 'express';

import meetupRouters from './meetupRouters.js';

import errorHandleMiddleware from '../middleware/errorHandleMiddleware.js';
import notFoundPageMiddleware from '../middleware/notFoundPageMiddleware.js';

const homeRouters = Router();

homeRouters.get('/', (request, response) => {
  response.send('Welcome to the page of the api meetups system');
});

homeRouters.use('/api/meetups', meetupRouters);

homeRouters.use(notFoundPageMiddleware);
homeRouters.use(errorHandleMiddleware);

export default homeRouters;
