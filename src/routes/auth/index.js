const {
  checkEligibility,
} = require("../../api/authentication/controllers/checkEligibility");
const { signIn } = require("../../api/authentication/controllers/signIn");
const addUser = require("../../api/users/controllers/addUser");
const router = require("express").Router();

router.get("/VerifyEligibility/:rollNumber", checkEligibility);
router.post("/addUser", addUser);
router.post("/signIn", signIn);

module.exports = router;
