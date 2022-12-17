const express = require("express");
const router = express.Router();

/* GET users listing. */
router.get("/submit", function (req, res, next) {
  res.json({
    name: "Bhaven",
    email: "naikbhaven11@gmail.com",
    message: "This is a new message from the server!",
  });
});

module.exports = router;
