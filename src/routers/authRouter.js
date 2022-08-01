import { Router } from 'express';
import authControllers from '../controllers/authControllers.js';

import asyncWrapperMiddleware from '../middleware/asyncWrapperMiddleware.js';

const authRouter = Router();

authRouter.post('/sign-up', asyncWrapperMiddleware(authControllers.singUp));

authRouter.post('/sign-in', asyncWrapperMiddleware(authControllers.singIn));

authRouter.post(
  '/tokens',
  asyncWrapperMiddleware(authControllers.updateTokens)
);

authRouter.delete(
  '/disable-tokens',
  asyncWrapperMiddleware(authControllers.disableTokens)
);

export default authRouter;
