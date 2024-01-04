const eligible_student_list = require("../../../models").eligible_student_list;
const allUser = require("../../../models").user;

const checkEligibility = async (req, res) => {
  const { rollNumber, registrationNumber } = req.body;

  try {
    const existingUser = await allUser.findOne({
      where: {
        rollNumber: rollNumber,
      },
    });
    if (existingUser) {
      return res.status(400).json({ message: "User Already Registered" });
    }

    const student = await eligible_student_list.findOne({
      where: {
        rollNumber: rollNumber,
        registrationNumber: registrationNumber, // Check both rollNumber and registrationNumber
      },
    });
    if (student) {
      return res.status(200).json({ message: "Success! You are eligible." });
    } else {
      return res.status(404).json({ message: "You are not eligible." });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  checkEligibility,
};
