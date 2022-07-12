import { Sequelize, DataTypes } from 'sequelize';
import { meetupModel } from './meetupModel.js';

export const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_LOGIN,
  process.env.DB_PASSWORD,
  {
    dialect: 'postgres',
    host: process.env.DB_HOST,
    logging: false
  }
);

export const models = {}
models.meetupModel = meetupModel(sequelize, DataTypes)
// ...




