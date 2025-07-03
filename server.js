const express = require("express");  // Express is a web framework for Node.js
const dotenv = require("dotenv");   // dotenv is a zero-dependency module that loads environment variables from a .env file into process.env
const cors = require("cors");       // CORS middleware to enable Cross-Origin Requests
const nodemailer = require("nodemailer");  // Nodemailer is a library for sending emails

// Load environment variables
dotenv.config();

const app = express();  // Create an express app
const router = express.Router();  // Create a router for handling routes

// Middleware
app.use(cors());  // Enable CORS
app.use(express.json());  // Parse JSON bodies

// Start the server
app.listen(5000, () => console.log("Server Running"));

// Configure the email transporter using credentials from .env
const contactEmail = nodemailer.createTransport({
  service: 'gmail',  // Using Gmail as the email service
  auth: {
    user: process.env.EMAIL_USER,  // Fetch the email from the environment variable
    pass: process.env.EMAIL_PASS,  // Fetch the password from the environment variable
  },
});

// Verify email configuration
contactEmail.verify((error) => {
  if (error) {
    console.log("Error with email configuration: ", error);
  } else {
    console.log("Ready to Send");
  }
});

// POST endpoint for the contact form submission
router.post("/contact", (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  const name = `${firstName} ${lastName}`;
  const mail = {
    from: name,
    to: process.env.EMAIL_USER,  // Send the email to the address stored in the environment variable
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };

  // Send the email
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(200).json({ code: 200, status: "Message Sent" });
    }
  });
});

// Route for handling contact form
app.use("/", router);
