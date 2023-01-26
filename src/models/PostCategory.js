  const postCategoriesSchema = (sequelize, DataTypes) => {
    const postCategoriesTable = sequelize.define('PostCategory', {
      postId: DataTypes.NUMBER,
      categoryId: DataTypes.NUMBER
    }, {
      tableName: 'PostCategory',
      underscored: true
    });

    postCategoriesTable.associate = ({ Category, BlogPost }) => {
      Category.belongsToMany(BlogPost, {
        as: 'blogsPosts',
        through: postCategoriesTable,
        foreignKey: 'id',
        otherKey: 'id'
      })

      BlogPost.belongsToMany(Category, {
        as: 'category',
        through: postCategoriesTable,
        foreignKey: 'id',
        otherKey: 'id'
      })
    }
  
    
    return postCategoriesTable;
  
  }
    module.exports = postCategoriesSchema;