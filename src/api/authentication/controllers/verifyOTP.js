const User = require("../../../models").verify_user;
const bcrypt = require("bcrypt");
const OTP_EXPIRY_TIME_SECONDS = 3000; // 5 minutes

const verifyOTP = async (req, res) => {
  const { phoneNumber } = req.params;
  const { userOTP } = req.body;
  console.log(phoneNumber);
  try {
    const user = await User.findOne({ where: { phone_number: phoneNumber } });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const otpMatches = await bcrypt.compare(userOTP, user.otp); // Compare hashed OTP
    console.log(otpMatches);
    if (otpMatches) {
      const currentTime = new Date();
      const timeDifference = (currentTime - new Date(user.otpCreatedAt)) / 1000;
      console.log(new Date(user.otpCreatedAt));

      if (timeDifference <= OTP_EXPIRY_TIME_SECONDS) {
        user.verified = true;
        await user.save(); // Save the updated user verification status
        return res.status(200).json({
          success: "true",
          message: "OTP verified successfully",
        });
      } else {
        return res.status(400).json({ message: "OTP has expired" });
      }
    } else {
      return res.status(400).json({ message: "OTP is invalid" });
    }
  } catch (error) {
    console.error("Error verifying OTP: " + error);
    return res.status(500).json({ message: "Error verifying OTP" });
  }
};

module.exports = verifyOTP;
