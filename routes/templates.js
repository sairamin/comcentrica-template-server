const express = require("express");
const router = express.Router();
const Template = require("../models/Template");

router
  .route("/")
  .get((req, res) => {
    Template.findAll()
      .then((response) => {
        res.json({
          results: response,
        });
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({
          error,
        });
      });
  })
  .post((req, res) => {
    console.log(req.body)
    const payload = req.body;
    Template.create({
      id: payload.id,
      name: payload.name,
      text: payload.text,
    })
      .then(() => {
        res.redirect("/templates");
      })
      .catch((error) => {
        res.status(500).json({
          error,
        });
      });
  });

router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Template ${id}`);
});

module.exports = router;
