const categoriesSchema = (sequelize, DataTypes) => {
  const categoriesTable = sequelize.define('Category', {
    id: DataTypes.Integer,
    name: DataTypes.STRING
  }, {
    tableName: 'Category',
    underscored: true
  });

  return categoriesTable;

}
  module.exports = categoriesSchema;
