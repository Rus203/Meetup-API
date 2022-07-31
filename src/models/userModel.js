import bcrypt from 'bcrypt';

export default (sequelize, DataTypes) => {
  return sequelize.define(
    'user',
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
      login: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        set: function (value) {
          const hash = bcrypt.hashSync(value, 12);
          this.setDataValue('password', hash);
        },
      },
    },
    {
      timestamps: false,
      defaultScope: {
        attributes: {
          exclude: ['password'],
        },
      },
    }
  );
};
