const userSchema = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        foreignKey: true,
      },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    tableName: 'users',
    underscored: true,
    timestamps: false
  });
  
  User.associate = (models) => {
    User.hasMany(models.BlogPost, {
      foreingKey: 'id'
    })
  }

  return User;

}
  module.exports = userSchema;