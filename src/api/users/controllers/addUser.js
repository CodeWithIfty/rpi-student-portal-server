const UsersTable = require("../../../models").user;
const bcrypt = require("bcrypt");

const addUser = async (req, res) => {
  try {
    const { phone_number, password, verified } = req.body;

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    const userData = await UsersTable.create({
      phone_number,
      password: hashedPassword,
      verified,
    });

    res.status(201).json({ success: true, message: "User added successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = addUser;
