"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("users", "username", {
      type: Sequelize.STRING,
      allowNull: true, // Modify as needed
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("users", "username");
  },
};