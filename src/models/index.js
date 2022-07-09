import { Sequelize, DataTypes } from 'sequelize';
import { meetup } from './meetupModel.js';

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
models.meetup = meetup(sequelize, DataTypes)
// ...




