const blogSchema = (sequelize, DataTypes) => {
  const blogPostsTable = sequelize.define('BlogPost', {
    id: DataTypes.Interge,
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.NUMBER,
    published: DataTypes.Date,
    updated: DataTypes.Date
  }, {
    tableName: 'BlogPost',
    underscored: true
  });

  blogPostsTable.associate = (models) => {
    blogPostsTable.belongsTo(models.User, {
      as: 'User',
      foreingKey: 'id'
    })
  }

  return blogPostsTable;

}
  module.exports = blogSchema;