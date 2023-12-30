const CryptoJS = require("crypto-js");
const user = require("../../../models").user;
require("dotenv").config();
const axios = require("axios");

const createUser = async (req, res) => {
  const { phone_number, username, rollNumber } = req.body;

  try {
    // Check if user with phone_number already exists
    const existingUser = await user.findOne({
      where: {
        rollNumber: rollNumber,
      },
    });

    const isMobilNumberUsed = await user.findOne({
      where: {
        phone_number: phone_number,
      },
    });

    if (existingUser || isMobilNumberUsed) {
      return res.status(400).json({ message: "User already registered." });
    } else {
      // Create a simple password (customize for better security)
      const password = phone_number.slice(3) + username.slice(0, 2); // Example password creation

      // Hash the password using crypto-js module (SHA256 hashing algorithm)
      const hashedPassword = CryptoJS.SHA256(password).toString();

      // Create the user with the hashed password
      const newUser = await user.create({
        phone_number: phone_number,
        username: username,
        rollNumber: rollNumber,
        password: hashedPassword,
        verified: false,
      });

      // Send user credentials via SMS
      const message = `Your username: ${phone_number}, Password: ${password}`;
      await axios.get(
        `https://api.greenweb.com.bd/api.php?token=${process.env.SMS_TOKEN}&to=${phone_number}&message=${message}`
      );

      return res.status(201).json({
        message: "User created. Credentials sent via SMS.",
        user: message,
      });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createUser,
};
