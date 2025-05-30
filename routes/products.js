const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "🟢 Działa! Produkty są gotowe." });
});

module.exports = router;
