'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('eligible_student_lists', [
      {
        rollNumber: 522564,
        registrationNumber: 456,

      },
      {
        rollNumber: 519700,
        registrationNumber: 101,
      },
      {
        rollNumber: 522588,
        registrationNumber: 101,
      },
      {
        rollNumber: 519710,
        registrationNumber: 101,
      },
      // Add more data objects as needed
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    // Implement the logic to remove the seeded data
    // This will be executed when reverting the seed
    await queryInterface.bulkDelete('eligible_student_lists', null, {});
  },
};
