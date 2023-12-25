const {
  addStudentInfo,
} = require("../../api/users/controllers/addStudentInfo");
const { getAllEntries } = require("../../api/users/controllers/getAllEntries");
const getSingleStudentData = require("../../api/users/controllers/getSingleStudentData");
const verifyToken = require("../../middlewares/verifyToken");

const router = require("express").Router();

router.put("/updateOrCreate/:rollNumber", addStudentInfo);

router.get(
  "/student/:student_mobile_number",
  verifyToken,
  getSingleStudentData
);
router.get("/entries", getAllEntries);

module.exports = router;
