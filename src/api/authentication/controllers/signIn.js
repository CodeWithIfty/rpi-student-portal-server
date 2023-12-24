const bcrypt = require("bcrypt");
const allUser = require("../../../models").user;

const signIn = async (req, res) => {
  const { phone_number, password } = req.body;

  try {
    // Check if the user exists with the provided phone number
    const user = await allUser.findOne({ where: { phone_number } });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare the provided password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      const user = {
        phone_number,
      };
      // Passwords match, user authenticated
      return res.status(200).send({ message: "Sign-in successful", user });
    } else {
      // Incorrect password
      return res.status(401).send({ message: "Incorrect password" });
    }
  } catch (error) {
    console.error("Error signing in:", error);
    return res.status(500).send({ message: "Error signing in" });
  }
};

module.exports = {
  signIn,
};
