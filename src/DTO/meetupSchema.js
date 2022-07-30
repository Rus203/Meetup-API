import Joi from 'joi';

export const createdMeetupSchema = Joi.object().keys({
  name: Joi.string().min(1).max(50).required(),
  description: Joi.string().min(1).max(30).required(),
  keyWords: Joi.array().items(Joi.string()).optional(),
  date: Joi.string()
    .regex(/^([0-9]{4}\.[0-9]{1,2}\.[0-9]{1,2}, [0-9]{1,2}:[0-9]{1,2})$/)
    .required(),
  place: Joi.string().min(1).max(50).required(),
});

export const updatedMeetupSchema = Joi.object().keys({
  name: Joi.string().min(1).max(50).optional(),
  description: Joi.string().min(1).max(30).optional,
  keyWords: Joi.array().items(Joi.string()).optional(),
  date: Joi.string()
    .regex(/^([0-9]{4}\.[0-9]{1,2}\.[0-9]{1,2}, [0-9]{1,2}:[0-9]{1,2})$/)
    .optional(),
  place: Joi.string().min(1).max(50).optional(),
});
