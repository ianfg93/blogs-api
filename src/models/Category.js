const categoriesSchema = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      foreignKey: true,
    },
    name: DataTypes.STRING
  }, {
    tableName: 'Category',
    underscored: true
  });

  return Category;

}
  module.exports = categoriesSchema;
