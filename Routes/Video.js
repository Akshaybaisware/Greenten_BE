const router = require("express").Router();
const { uploadVideoQuestions, getquestions, add_assignment } = require("../Controllers/Video");

router.post("/uploadvideoquestions", uploadVideoQuestions);
router.post("/getquestions", getquestions);
router.post("/addassignment", add_assignment);

module.exports = router;