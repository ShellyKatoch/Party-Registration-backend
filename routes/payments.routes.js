const express = require("express");
const router = express.Router();

// Import functions from the controller
const { createOrder, verifyPayment } = require("../controllers/payments.controller");

// Debugging: Check if the imports are undefined
console.log({ createOrder, verifyPayment });

router.post("/createOrder", createOrder);
router.post("/verifyPayment", verifyPayment);

module.exports = router;
