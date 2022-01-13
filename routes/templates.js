const _head = require("lodash/head");
const _isEmpty = require("lodash/isEmpty");
const express = require("express");
const formatTemplate = require("../helpers/templates");

const router = express.Router();
const Template = require("../models/Template");
const User = require("../models/User");

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

router.get("/:id/:userId", (req, res) => {
  const { id, userId } = req.params;
  Template.findAll({
    where: {
      id: id,
    },
  })
    .then((templateResponse) => {
      const templateDetails = _head(templateResponse) || {};
      if (!_isEmpty(templateDetails)) {
        User.findAll({
          where: {
            id: userId,
          },
        })
          .then((usersResponse) => {
            const user = _head(usersResponse) || {};
            if (!_isEmpty(user)) {
              const formattedTemplate = formatTemplate(templateDetails, user);
              res.json({
                results: [formattedTemplate],
              });
            } else {
              res.status(404).json({
                message: `No user found with ID: ${userId}`,
              });
            }
          })
          .catch((error) => {
            res.status(500).json({
              error,
            });
          });
      } else {
        res.status(404).json({
          message: `No template found with ID: ${id}`,
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        error,
      });
    });
});

module.exports = router;
