const { request } = require("express");
const express = require("express");
const router = express.Router();

router.get("/chatbot", (req, res) => {
  res.json({ ok: true, msg: "Esto esta funcionando bien desde ROUTES" });
});


module.exports = router;