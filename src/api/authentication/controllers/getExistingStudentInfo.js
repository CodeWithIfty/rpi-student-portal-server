const existingStudentInfo = require("../../../models").scholership_entry; // Import your Sequelize model

const getExistingStudentInfo = async (req, res) => {
  const { rollNumber } = req.params;

  try {
    const entry = await existingStudentInfo.findOne({
      where: {
        present_education_roll: rollNumber, // Find a record by past_education_roll_number
      },
    });

    if (entry) {
      // If entry with the rollNumber exists
      return res.status(200).json({ data: entry });
    } else {
      // If entry with the rollNumber doesn't exist
      return res.status(404).json({ message: "Data not found." });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message }); // Handle other errors
  }
};

module.exports = {
  getExistingStudentInfo,
};
