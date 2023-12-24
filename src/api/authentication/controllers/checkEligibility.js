const eligible_student_list = require("../../../models").eligible_student_list; // Import your Sequelize model

const checkEligibility = async (req, res) => {
  const { rollNumber } = req.params;

  try {
    const student = await eligible_student_list.findOne({
      where: { rollNumber: rollNumber }, // Find a student with the given rollNumber
    });

    if (student) {
      // If student with the rollNumber exists
      return res.status(200).json({ message: "Success! You are eligible." });
    } else {
      // If student with the rollNumber doesn't exist
      return res.status(404).json({ message: "You are not eligible." });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message }); // Handle other errors
  }
};

module.exports = {
  checkEligibility,
};
