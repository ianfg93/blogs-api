const blogSchema = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        foreignKey: true,
      },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.NUMBER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE
  }, {
    tableName: 'BlogPost',
    underscored: true
  });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, {
      as: 'User',
      foreingKey: 'id'
    })
  }

  return BlogPost;

}
  module.exports = blogSchema;