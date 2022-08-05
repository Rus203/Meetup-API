import { Router } from 'express';

import meetupRouters from './meetupRouters.js';
import authRouters from './authRouter.js';

import errorHandleMiddleware from '../middleware/errorHandleMiddleware.js';
import notFoundPageMiddleware from '../middleware/notFoundPageMiddleware.js';

import swagger from '../../swagger/swagger.js';
import swaggerUi from 'swagger-ui-express';

const homeRouters = Router();

homeRouters.get('/', (request, response) => {
  response.send('Welcome to the page of the api meetups system');
});

homeRouters.use('/api/meetups', meetupRouters);
homeRouters.use('/api/auth', authRouters);
homeRouters.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swagger));

homeRouters.use(notFoundPageMiddleware);
homeRouters.use(errorHandleMiddleware);

export default homeRouters;
