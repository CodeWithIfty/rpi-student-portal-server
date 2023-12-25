'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('eligible_student_lists', 'id', {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('eligible_student_lists', 'id');
  }
};
