"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("student_info", "student_blood_group", {
      type: Sequelize.STRING,
      allowNull: true, // Modify as per your requirements
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("student_info", "student_blood_group");
  },
};
