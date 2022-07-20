import Joi from 'joi'

const userSchema = method => {
  if (method === 'PUT') {
    return Joi.object().keys({
      login: Joi.string().min(1).max(30).alphanum().required(),
      password: Joi.string().min(1).max(30).alphanum().required(),
    })
  } else if (method === 'PATCH') {
    return Joi.object().keys({
      login: Joi.string().min(1).max(30).alphanum().optional(),
      password: Joi.string().min(1).max(30).alphanum().optional(),
    })
  }
}

export default userSchema
