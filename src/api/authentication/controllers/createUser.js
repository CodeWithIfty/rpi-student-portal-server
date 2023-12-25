const bcrypt = require("bcrypt");
const saltRounds = 10; // Number of salt rounds for hashing
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
      // If user already exists with the given phone_number
      return res.status(400).json({ message: "User already registered." });
    } else {
      // Create a simple password (customize for better security)
      const password = phone_number.slice(3) + username.slice(0, 2); // Example password creation

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      // Create the user with the hashed password
      const newUser = await user.create({
        phone_number: phone_number,
        username: username,
        rollNumber: rollNumber,
        password: hashedPassword, // Store hashed password in the database
        verified: false, // Assuming user needs verification
      });

      // Send user credentials via SMS
      const message = `Your username: ${phone_number}, Password: ${password}`;
      // const smsSent = await smsService.sendSMS(phone_number, message);
      await axios.get(
        `https://api.greenweb.com.bd/api.php?token=${process.env.SMS_TOKEN}&to=${phone_number}&message=${message}`
      );

      if (true) {
        return res.status(201).json({
          message: "User created. Credentials sent via SMS.",
          user: message,
        });
      } else {
        return res
          .status(500)
          .json({ message: "Failed to send SMS. User created." });
      }
    }
  } catch (error) {
    return res.status(500).json({ message: error.message }); // Handle other errors
  }
};

module.exports = {
  createUser,
};
