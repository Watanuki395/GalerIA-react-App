const express = require("express");
const router = express.Router();
//const dff = require('../dialogFlow/df')

router.get("/", (req, res) => {
  res.json({ ok: true, msg: "Esto esta cargando supeeeer! bien desde APIiiiii" });
});

router.get("/chatbot", (req, res) => {
  res.json({ ok: true, msg: "Esto esta cargando supeeeer! bien desde API" });
});

router.post("/contact", (req, res) => {
  console.log("si llegamos");
  res.json({ ok: true, msg: "mensaje recibido con exito!!" });
});


module.exports = router;
