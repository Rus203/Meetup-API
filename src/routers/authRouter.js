import { Router } from 'express';
import authControllers from '../controllers/authControllers.js';

import { singUpSchema, singInSchema, tokenSchema } from '../DTO/authSchema.js';

import asyncWrapperMiddleware from '../middleware/asyncWrapperMiddleware.js';
import joiValidateMiddleware from '../middleware/joiValidateMiddleware.js';

const authRouter = Router();

authRouter.post(
  '/sign-up',
  joiValidateMiddleware(singUpSchema),
  asyncWrapperMiddleware(authControllers.singUp)
);

authRouter.post(
  '/sign-in',
  joiValidateMiddleware(singInSchema),
  asyncWrapperMiddleware(authControllers.singIn)
);

authRouter.post(
  '/tokens',
  joiValidateMiddleware(tokenSchema),
  asyncWrapperMiddleware(authControllers.updateTokens)
);

authRouter.delete(
  '/disable-tokens',
  joiValidateMiddleware(tokenSchema),
  asyncWrapperMiddleware(authControllers.disableTokens)
);

export default authRouter;
