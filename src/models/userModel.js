export const userModel = (sequelize, DataTypes) => {
  return sequelize.define(
    'user',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      login: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNUll: false,
        is: /^[0-9a-f]{64}$/i,
      },
    },
  )
}
