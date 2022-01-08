const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/", (req, res) => {
  User.findAll().then((response) => {
    res.json({
      results: response
    })
  }).catch((error) => {
    res.status(500).json({
      error
    });
  });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.send(`User ${id}`);
});

module.exports = router;
