const Student = require("../../../models").student_info;

const getSingleStudentData = async (req, res) => {
  const { student_mobile_number } = req.params; // Assuming the student ID is passed in the URL parameters

  try {
    const student = await Student.findOne({ where: { student_mobile_number } });

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json({ data: student });
  } catch (error) {
    console.error("Error retrieving student data:", error);
    res.status(500).json({ message: "Error retrieving student data" });
  }
};

module.exports = getSingleStudentData;
