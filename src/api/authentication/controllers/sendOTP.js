const { default: axios } = require("axios");
const bcrypt = require("bcrypt");
const User = require("../../../models").verify_user;
const allUser = require("../../../models").user;

const sendOTP = async (req, res) => {
  const { phoneNumber } = req.body;

  try {
    let userData = await allUser.findOne({
      where: { phone_number: phoneNumber },
    });
    if (userData) {
      return res.status(400).json({ message: "User Already Registered" });
    }
    let user = await User.findOne({ where: { phone_number: phoneNumber } });

    if (user) {
      const numericOTP = Math.floor(1000 + Math.random() * 9000); // Generate a random 4-digit number
      const OTP = numericOTP.toString(); // Convert the number to a string
      const hashedOTP = await bcrypt.hash(OTP, 10); // Hash OTP for storage
      const otpCreatedAt = new Date();

      user.otp = hashedOTP;
      user.otpCreatedAt = otpCreatedAt;
      await user.save();

      const message = `Your OTP is: ${OTP}`;
      // Send message using SMS API
      const result = await axios.get(
        `https://api.greenweb.com.bd/api.php?token=${process.env.SMS_TOKEN}&to=${phoneNumber}&message=${message}`
      );
      console.log(result);
      console.log(message);
      return res
        .status(200)
        .json({ message: "OTP updated and sent successfully" });
    } else {
      const numericOTP = Math.floor(1000 + Math.random() * 9000); // Generate a random 4-digit number
      const OTP = numericOTP.toString(); // Convert the number to a string
      const hashedOTP = await bcrypt.hash(OTP, 10); // Hash OTP for storage
      const otpCreatedAt = new Date();

      const newUser = await User.create({
        phone_number: phoneNumber,
        otp: hashedOTP,
        otpCreatedAt,
      });

      const message = `Your OTP is: ${OTP}`;
      // Send message using SMS API
      console.log(message);
      return res
        .status(200)
        .json({ message: "New user created, OTP sent successfully" });
    }
  } catch (error) {
    console.error("Error saving OTP or sending SMS: " + error);
    return res.status(500).json({ message: "Error sending OTP via SMS API" });
  }
};

module.exports = sendOTP;
