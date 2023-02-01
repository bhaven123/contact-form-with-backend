const express = require("express");
const router = express.Router();

const nodemailer = require("nodemailer");
require("dotenv").config();

// nodemailer setup
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

// verify connection configuration
transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

/* GET users listing. */
router.post("/submit", (req, res, next) => {
  const enteredName = req.body.name;
  const enteredEmail = req.body.email;
  const enteredMessage = req.body.message;
  console.log(enteredEmail);

  // Email response object
  const sendEmail = {
    from: "",
    to: process.env.EMAIL,
    subject: "New Inquiry",
    text: {
      Email: "",
      Message: "",
    },
  };

  // Sending email using nodemailer
  transporter.sendMail(sendEmail, (err, data) => {
    if (err) res.json({ status: "fail" });
    else res.json({ status: "success" });
  });
});

module.exports = router;
