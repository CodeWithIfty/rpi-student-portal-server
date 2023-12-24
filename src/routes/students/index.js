const addStudentInfo = require("../../api/users/controllers/addStudentInfo");
const { getAllEntries } = require("../../api/users/controllers/getAllEntries");
const getSingleStudentData = require("../../api/users/controllers/getSingleStudentData");

const router = require("express").Router();

router.post("/addStudentInfo", addStudentInfo);

router.get("/students/:student_mobile_number", getSingleStudentData);
router.get("/entries", getAllEntries);

module.exports = router;
