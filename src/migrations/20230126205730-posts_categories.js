'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('posts_categories', { 
      post_id: {
        references: {
          model: 'blog_posts',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      category_id: {
        references: {
          model: 'categories',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    return await queryInterface.dropTable('posts_categories');
  }
};