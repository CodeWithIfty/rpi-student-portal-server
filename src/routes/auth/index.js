const sendOTP = require("../../api/authentication/controllers/sendOTP");
const { signIn } = require("../../api/authentication/controllers/signIn");
const verifyOTP = require("../../api/authentication/controllers/verifyOTP");
const addUser = require("../../api/users/controllers/addUser");

const router = require("express").Router();

router.put("/sendOTP", sendOTP);
router.post("/addUser", addUser);
router.post("/signIn", signIn);
router.post("/verifyOTPAndSetPassword/:phoneNumber", verifyOTP);

module.exports = router;
