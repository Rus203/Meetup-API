import { Router } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import { NotFoundError } from '../errors/NotFoundError.js'

import { meetupRouter } from './meetupRouter.js';

export const routing = Router();

routing.get('/', (req, res) => {
  res.send('Welcome to the page');
});

routing.use('/api/', meetupRouter);

routing.use('/*', (req, res) => {   // to do it over in a middleware
  throw new NotFoundError() 
});

routing.use((err, req, res, next) => {    // to do it over in a middleware
  res.status(500);
  res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .send(ReasonPhrases.INTERNAL_SERVER_ERROR);
});
