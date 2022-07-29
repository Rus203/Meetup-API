import { Router } from 'express';

import meetupRouters from './meetupRouters.js';

const homeRouters = Router();

homeRouters.get('/', (request, response) => {
  response.send('Welcome to the page of the api meetups system');
});

homeRouters.use('/api/meetups/', meetupRouters);

export default homeRouters;
