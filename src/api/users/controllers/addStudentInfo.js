const Student = require("../../../models").Student;

const addOrUpdateStudentInfo = async (req, res) => {
  const { present_education_roll } = req.body;
  console.log(req.body);
  try {
    let existingStudent = await Student.findOne({
      where: { present_education_roll },
    });

    if (existingStudent) {
      // If the student exists, update their information
      await existingStudent.update(req.body);
      res.status(200).json({
        message: "Student information updated successfully",
        data: existingStudent,
      });
    } else {
      // If the student doesn't exist, create a new student
      const newStudent = await Student.create(req.body);
      res.status(201).json({
        message: "New student created successfully",
        data: newStudent,
      });
    }
  } catch (error) {
    console.error("Error adding or updating student:", error);
    res.status(500).json({ message: "Error adding or updating student" });
  }
};

module.exports = addOrUpdateStudentInfo;
