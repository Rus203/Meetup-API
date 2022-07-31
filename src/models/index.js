import sequelize from '../../sequelize/index.js';
import { DataTypes } from 'sequelize';

import meetupModel from './meetupModel.js';
import roleModel from './roleModel.js';
import userRoleModel from './userRoleModel.js';
import userModel from './userModel.js';

const Meetup = meetupModel(sequelize, DataTypes);
const User = userModel(sequelize, DataTypes);
const UserRole = userRoleModel(sequelize, DataTypes);
const Role = roleModel(sequelize, DataTypes);

User.belongsToMany(Role, { through: UserRole });
UserRole.belongsToMany(User, { through: UserRole });

User.hasMany(Meetup);
Meetup.belongsTo(User);

export const models = {
  meetup: Meetup,
  role: Role,
  user: User,
  userRole: UserRole,
};
