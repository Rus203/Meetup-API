import sequelize from '../../sequelize/index.js';
import { DataTypes } from 'sequelize';

import meetupModel from './meetupModel.js';
import meetupUserModel from './meetupUserModel.js';
import roleModel from './roleModel.js';
import userRoleModel from './userRoleModel.js';
import userModel from './userModel.js';
import tokenModel from './tokenModel.js';

const Meetup = meetupModel(sequelize, DataTypes);
const MeetupUser = meetupUserModel(sequelize, DataTypes);
const User = userModel(sequelize, DataTypes);
const UserRole = userRoleModel(sequelize, DataTypes);
const Role = roleModel(sequelize, DataTypes);
const Token = tokenModel(sequelize, DataTypes);

User.belongsToMany(Role, { through: UserRole });
Role.belongsToMany(User, { through: UserRole });

User.hasMany(Meetup, { foreignKey: 'organizerId' });
Meetup.belongsTo(User, { foreignKey: 'organizerId' });

Meetup.belongsToMany(User, { through: MeetupUser });
User.belongsToMany(Meetup, { through: MeetupUser });

User.hasMany(Token);
Token.belongsTo(User);

export const models = {
  meetup: Meetup,
  meetupUser: MeetupUser,
  role: Role,
  user: User,
  userRole: UserRole,
  token: Token,
};
