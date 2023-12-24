'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Students', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      student_name_bangla: {
        type: Sequelize.STRING
      },
      fathers_name_bangla: {
        type: Sequelize.STRING
      },
      mothers_name_bangla: {
        type: Sequelize.STRING
      },
      student_name_english: {
        type: Sequelize.STRING
      },
      fathers_name_english: {
        type: Sequelize.STRING
      },
      mothers_name_english: {
        type: Sequelize.STRING
      },
      student_birth_certificate_number: {
        type: Sequelize.STRING
      },
      fathers_nid: {
        type: Sequelize.STRING
      },
      mothers_nid: {
        type: Sequelize.STRING
      },
      date_of_birth: {
        type: Sequelize.DATE
      },
      fathers_date_of_birth: {
        type: Sequelize.DATE
      },
      mothers_date_of_birth: {
        type: Sequelize.DATE
      },
      gender: {
        type: Sequelize.STRING
      },
      marital_status: {
        type: Sequelize.STRING
      },
      student_mobile_number: {
        type: Sequelize.STRING
      },
      fathers_mobile_number: {
        type: Sequelize.STRING
      },
      mothers_mobile_number: {
        type: Sequelize.STRING
      },
      permanent_division: {
        type: Sequelize.STRING
      },
      permanent_district: {
        type: Sequelize.STRING
      },
      permanent_upazila: {
        type: Sequelize.STRING
      },
      permanent_union: {
        type: Sequelize.STRING
      },
      permanent_post_code: {
        type: Sequelize.STRING
      },
      permanent_village: {
        type: Sequelize.STRING
      },
      present_division: {
        type: Sequelize.STRING
      },
      present_district: {
        type: Sequelize.STRING
      },
      present_upazila: {
        type: Sequelize.STRING
      },
      present_union: {
        type: Sequelize.STRING
      },
      present_post_code: {
        type: Sequelize.STRING
      },
      present_village: {
        type: Sequelize.STRING
      },
      past_education_division: {
        type: Sequelize.STRING
      },
      past_education_district: {
        type: Sequelize.STRING
      },
      past_education_upazila: {
        type: Sequelize.STRING
      },
      past_education_year: {
        type: Sequelize.INTEGER
      },
      past_education_exam_name: {
        type: Sequelize.STRING
      },
      past_education_roll_number: {
        type: Sequelize.STRING
      },
      past_education_registration_number: {
        type: Sequelize.STRING
      },
      past_education_school_name: {
        type: Sequelize.STRING
      },
      past_education_result: {
        type: Sequelize.STRING
      },
      past_education_board: {
        type: Sequelize.STRING
      },
      past_education_group: {
        type: Sequelize.STRING
      },
      present_education_division: {
        type: Sequelize.STRING
      },
      present_education_district: {
        type: Sequelize.STRING
      },
      present_education_semester: {
        type: Sequelize.STRING
      },
      present_education_admission_year: {
        type: Sequelize.INTEGER
      },
      present_education_upazila: {
        type: Sequelize.STRING
      },
      present_education_season: {
        type: Sequelize.STRING
      },
      present_education_institute_name: {
        type: Sequelize.STRING
      },
      present_education_department: {
        type: Sequelize.STRING
      },
      present_education_shift: {
        type: Sequelize.STRING
      },
      present_education_roll: {
        type: Sequelize.STRING
      },
      present_education_registration_number: {
        type: Sequelize.STRING
      },
      guardian_relation: {
        type: Sequelize.STRING
      },
      guardian_name_bangla: {
        type: Sequelize.STRING
      },
      guardian_name_english: {
        type: Sequelize.STRING
      },
      guardian_nid: {
        type: Sequelize.STRING
      },
      guardian_date_of_birth: {
        type: Sequelize.DATE
      },
      guardian_mobile_number: {
        type: Sequelize.STRING
      },
      mobile_banking: {
        type: Sequelize.STRING
      },
      account_holder_name_english: {
        type: Sequelize.STRING
      },
      account_holder_nid: {
        type: Sequelize.STRING
      },
      account_number: {
        type: Sequelize.STRING
      },
      who_bear_education_coast: {
        type: Sequelize.STRING
      },
      is_student_ethnic: {
        type: Sequelize.BOOLEAN
      },
      is_student_family_freedom_fighter: {
        type: Sequelize.BOOLEAN
      },
      is_student_has_another_scholarship: {
        type: Sequelize.BOOLEAN
      },
      is_student_physically_disabled: {
        type: Sequelize.BOOLEAN
      },
      student_img: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Students');
  }
};