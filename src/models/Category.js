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
    tableName: 'categories',
    underscored: true,
    timestamps: false,
  });

  return Category;

}
  module.exports = categoriesSchema;
