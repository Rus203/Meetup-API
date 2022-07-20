import { Router } from 'express'
import authControllers from '../controllers/authControllers.js'
import { userErrorHandleMiddleware } from '../middleware/userErrorHandleMiddleware.js'

const authRouter = Router()

authRouter.post('/sign-up', userErrorHandleMiddleware(authControllers.singUp))
authRouter.post('/sign-in', userErrorHandleMiddleware(authControllers.singIn))
authRouter.post('/tokens', userErrorHandleMiddleware(authControllers.tokens))
authRouter.post('/disable-tokens', userErrorHandleMiddleware(authControllers.disableTokens))

export default authRouter