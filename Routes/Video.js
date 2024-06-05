const router = require("express").Router();
const { uploadVideoQuestions } = require("../Controllers/Video");

router.post("/uploadvideoquestions", uploadVideoQuestions);

module.exports = router;