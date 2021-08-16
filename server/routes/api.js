const express = require("express");
const router = express.Router();
//const dff = require('../dialogFlow/df')

router.get("/chatbot", (req, res) => {
  res.json({ ok: true, msg: "Esto esta funcionando bien desde API" });
});




module.exports = router;
