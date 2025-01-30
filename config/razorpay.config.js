const razorpay = require('razorpay');
const dotenv = require('dotenv');
dotenv.config();

const createRazorpayInstance = () => {
    if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_SECRET_ID) {
      throw new Error("Razorpay `key_id` and `key_secret` are mandatory.");
    }
  
    return new razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_SECRET_ID,
    });
  };
  
  module.exports = createRazorpayInstance;