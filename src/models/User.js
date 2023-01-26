const userSchema = (sequelize, DataTypes) => {
  const users = sequelize.define('User', {
    id: DataTypes.Integer,
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    tableName: 'User',
    underscored: true
  });

  return users;

}
  module.exports = userSchema;