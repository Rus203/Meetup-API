import { Router } from 'express'
import authControllers from '../controllers/authControllers.js'
import { userErrorHandleMiddleware } from '../middleware/userErrorHandleMiddleware.js'
import { joiValidationMiddleware } from '../middleware/joiValidateMeetupMiddleware.js'
import tokensSchema from '../schemas/tokensSchema.js'
import userSchema from '../schemas/userSchema.js'

const authRouter = Router()

authRouter.post('/sign-up', joiValidationMiddleware(userSchema), userErrorHandleMiddleware(authControllers.singUp))
authRouter.post('/sign-in', joiValidationMiddleware(userSchema), userErrorHandleMiddleware(authControllers.singIn))
authRouter.post('/tokens', joiValidationMiddleware(tokensSchema), userErrorHandleMiddleware(authControllers.tokens))
authRouter.post('/disable-tokens',joiValidationMiddleware(tokensSchema), userErrorHandleMiddleware(authControllers.disableTokens))

export default authRouter