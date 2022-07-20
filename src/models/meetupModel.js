export const meetupModel = (sequelize, DataTypes) => {
  return sequelize.define(
    'meetup',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      keyWords: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
      time: {
        type: DataTypes.TIME,
      },
      place: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
    }
  )
}
