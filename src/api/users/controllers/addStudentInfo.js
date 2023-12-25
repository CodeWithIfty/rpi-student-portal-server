const Student = require("../../../models").student_info;

const addStudentInfo = async (req, res) => {
  const { rollNumber } = req.params;
  const studentData = req.body;

  try {
    // Check if the student exists based on rollNumber
    const existingStudent = await Student.findOne({
      where: {
        present_education_roll: rollNumber,
      },
    });

    if (existingStudent) {
      // If student exists, update the data
      await Student.update(studentData, {
        where: {
          present_education_roll: rollNumber,
        },
      });

      return res
        .status(200)
        .json({ message: "Student data updated successfully." });
    } else {
      // If student doesn't exist, create a new record
      await Student.create({
        ...studentData,
        present_education_roll: rollNumber, // Ensure rollNumber is set in the data
      });

      return res
        .status(201)
        .json({ message: "New student data created successfully." });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message }); // Handle other errors
  }
};

module.exports = {
  addStudentInfo,
};
