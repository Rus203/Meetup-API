export const refreshTokenModel = (sequelize, DataTypes) => {
  return sequelize.define(
    'refreshToken',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      content: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    }
  )
}
