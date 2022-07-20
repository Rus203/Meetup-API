import { Sequelize, DataTypes } from 'sequelize'
import { meetupModel } from './meetupModel.js'
import { userModel } from './userModel.js'
import { refreshTokenModel } from './refreshTokenModel.js'
import { roleModel } from './roleModel.js'
import { userRoleModel } from './userRoleModel.js'

export const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_LOGIN,
  process.env.DB_PASSWORD,
  {
    dialect: 'postgres',
    host: process.env.DB_HOST,
    logging: false,
  }
)

export const models = {}
models.meetupModel = meetupModel(sequelize, DataTypes)
models.userModel = userModel(sequelize, DataTypes)
models.refreshTokenModel = refreshTokenModel(sequelize, DataTypes)
models.userRoleModel = userRoleModel(sequelize, DataTypes)
models.roleModel = roleModel(sequelize, DataTypes)

models.userModel.belongsToMany(models.roleModel, {
  through: models.userRoleModel,
})
models.roleModel.belongsToMany(models.userModel, {
  through: models.userRoleModel,
})

models.userModel.hasMany(models.refreshTokenModel)
models.refreshTokenModel.belongsTo(models.userModel)
