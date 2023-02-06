const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
require("dotenv").config();
const htmlTemp = require("./../public/javascripts/mail-temp");

// nodemailer setup
const transporter = nodemailer.createTransport({
  service: "gmail",
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

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Express" });
});

/* Creating a POST request on form submission */
router.post("/submit", (req, res, next) => {
  const enteredName = req.body.name;
  const enteredEmail = req.body.email;
  const enteredMessage = req.body.message;

  // Email response object for Nodemailer transporter
  const sendEmail = {
    from: {
      name: enteredName,
      address: enteredEmail,
    },
    to: `Bhaven Naik ${process.env.EMAIL}`,
    subject: "New Inquiry",
    priority: "high",
    date: new Date(),
    html: htmlTemp(enteredName, enteredEmail, enteredMessage),
  };

  // Sending email using nodemailer
  transporter.sendMail(sendEmail, (err, data) => {
    if (err) res.json({ status: "fail" });
    else res.json({ status: "success" });
  });
});

module.exports = router;
