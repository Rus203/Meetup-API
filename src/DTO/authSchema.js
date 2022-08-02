import Joi from 'joi';

export const singUpSchema = Joi.object().keys({
  name: Joi.string().min(1).max(50).required(),
  login: Joi.string().min(1).max(50).required(),
  password: Joi.string().min(1).max(50).required(),
});

export const singInSchema = Joi.object().keys({
  name: Joi.string().min(1).max(50).optional,
  login: Joi.string().min(1).max(50).required(),
  password: Joi.string().min(1).max(50).required(),
});

export const tokenSchema = Joi.object().keys({
  refreshToken: Joi.string().required(),
});
