export default (sequelize, DataTypes) => {
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
      date: {
        type: DataTypes.DATE,
        allowNull: false,
        get: function () {
          return this.getDataValue('date')?.toLocaleString();
        },
      },
      place: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
