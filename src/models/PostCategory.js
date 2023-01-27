  const postCategoriesSchema = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostCategory', {
      postId: DataTypes.NUMBER,
      categoryId: DataTypes.NUMBER
    }, {
      tableName: 'PostCategory',
      underscored: true
    });

    PostCategory.associate = ({ Category, BlogPost }) => {
      Category.belongsToMany(BlogPost, {
        as: 'blogsPosts',
        through: PostCategory,
        foreignKey: 'id',
        otherKey: 'id'
      })

      BlogPost.belongsToMany(Category, {
        as: 'category',
        through: PostCategory,
        foreignKey: 'id',
        otherKey: 'id'
      })
    }
  
    
    return PostCategory;
  
  }
    module.exports = postCategoriesSchema;