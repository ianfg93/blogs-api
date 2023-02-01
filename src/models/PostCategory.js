  const postCategoriesSchema = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostCategory', {
      postId: DataTypes.NUMBER,
      categoryId: DataTypes.NUMBER
    }, {
      tableName: 'posts_categories',
      underscored: true,
      timestamps: false,
    });

    PostCategory.associate = ({ Category, BlogPost }) => {
      Category.belongsToMany(BlogPost, {
        as: 'blogsPosts',
        through: PostCategory,
        foreignKey: 'categoryId',
        otherKey: 'postId'
      })

      BlogPost.belongsToMany(Category, {
        as: 'categories',
        through: PostCategory,
        foreignKey: 'postId',
        otherKey: 'categoryId'
      })
    }
  
    
    return PostCategory;
  
  }
    module.exports = postCategoriesSchema;