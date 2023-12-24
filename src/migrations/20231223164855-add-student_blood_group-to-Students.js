"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Students", "student_blood_group", {
      type: Sequelize.STRING,
      allowNull: true, // Modify as needed
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Students", "student_blood_group");
  },
};
