"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("BlogPosts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
      },
      content: {
        type: Sequelize.STRING,
      },

      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'Users',
          key: 'id',
        },
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'published', // a coluna será criada no banco com este nome
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'updated', // a coluna será criada no banco com este nome
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("BlogPosts");
  },
};
