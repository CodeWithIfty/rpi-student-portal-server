const allUser = require("../../../models").user;
const crypto = require("crypto-js");

const signIn = async (req, res) => {
  const { phone_number, password } = req.body;
  try {
    // Check if the user exists with the provided phone number
    const user = await allUser.findOne({ where: { phone_number } });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // For illustration purposes, using a hypothetical function `verifyPassword`
    const passwordMatch = verifyPassword(password, user.password);

    if (passwordMatch) {
      const userData = {
        phone_number,
        // Any other user data you want to include
      };
      // Passwords match, user authenticated
      return res.status(200).json({ message: "Sign-in successful", user: userData });
    } else {
      // Incorrect password
      return res.status(401).json({ message: "Incorrect password" });
    }
  } catch (error) {
    console.error("Error signing in:", error);
    return res.status(500).json({ message: "Error signing in" });
  }
};

// Function to verify the password
const verifyPassword = (password, storedPassword) => {
  // Implement your password verification logic here
  // For example, comparing plain text passwords or using crypto for hashing comparison
  // This is just an example; use a strong hashing technique in production
  const hashedInputPassword = hashPassword(password); // Hash the input password
  return hashedInputPassword === storedPassword; // Compare the hashed input password with the stored password
};

// Function to hash the password using crypto-js (example hashing function)
const hashPassword = (password) => {
  return crypto.SHA256(password).toString();
};

module.exports = {
  signIn,
};
