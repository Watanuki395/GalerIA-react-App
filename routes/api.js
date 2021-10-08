const express = require("express");
const router = express.Router();
const { SendMail } = require('../controllers/contact')


router.post("/contact", SendMail)


module.exports = router;
