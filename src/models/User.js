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
  
  users.associate = (models) => {
    users.hasMany(models.BlogPost, {
      foreingKey: 'id'
    })
  }

  return users;

}
  module.exports = userSchema;