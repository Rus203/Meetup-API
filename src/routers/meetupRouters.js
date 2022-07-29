import { Router } from 'express';
import meetupControllers from '../controllers/meetupControllers.js';

const meetupRouters = Router();

meetupRouters.get('/', meetupControllers.readAll);
meetupRouters.post('/', meetupControllers.add);

meetupRouters.get('/:id', meetupControllers.readOne);
meetupRouters.put('/:id', meetupControllers.update);
meetupRouters.delete('/:id', meetupControllers.delete);

export default meetupRouters;
