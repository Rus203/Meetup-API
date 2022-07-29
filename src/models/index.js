import sequelize from '../../sequelize/index.js';
import { DataTypes } from 'sequelize';

import meetupModel from './meetupModel.js';

export const models = {
  meetup: meetupModel(sequelize, DataTypes),
  // ...
};
