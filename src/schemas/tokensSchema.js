import Joi from 'joi'

const tokensSchema = () => Joi.object().keys({
  refreshToken: Joi.string().min(1).required(),
})

export default tokensSchema
