import Joi from 'joi'

export const meetupSchema = method => {
  switch (method) {
    case 'POST':
      return Joi.object().keys({
        name: Joi.string().min(1).max(50).required(),

        description: Joi.string().min(1).max(30).required(),

        keyWords: Joi.array().items(Joi.string()).optional(),

        time: Joi.string()
          .regex(/^([0-9]{2})\:([0-9]{2})$/)
          .optional(),

        place: Joi.string().min(5).max(50).optional(),
      })
    case 'PUT':
      return Joi.object().keys({
        id: Joi.string()
          .guid({
            version: ['uuidv4', 'uuidv5'],
          })
          .required(),
        name: Joi.string().min(1).max(50).required(),

        description: Joi.string().min(1).max(30).required(),

        keyWords: Joi.array().items(Joi.string()).required(),

        time: Joi.string()
          .regex(/^([0-9]{2})\:([0-9]{2})$/)
          .required(),

        place: Joi.string().min(5).max(50).required(),
      })
    case 'PATCH':
      return Joi.object().keys({
        name: Joi.string().min(1).max(50).optional(),

        description: Joi.string().min(1).max(30).optional(),

        keyWords: Joi.array().items(Joi.string()).optional(),

        time: Joi.string()
          .regex(/^([0-9]{2})\:([0-9]{2})$/)
          .optional(),

        place: Joi.string().min(5).max(50).optional(),
      })
  }
}
