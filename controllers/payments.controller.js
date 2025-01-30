  const createRazorpayInstance = require("../config/razorpay.config")
  const crypto = require('crypto');
  require('dotenv').config();
  const mongoose = require('mongoose')
 const razorpayInstance = createRazorpayInstance()

 exports.createOrder = async (req, res) => {
  console.log(req.body)
  if (!req.body) {
    return res.status(400).json({ success: false, message: "Request body is missing" });
}
    const { courseId, amount } = req.body;
    const options = {
      amount: amount * 100,
      currency: "INR",
      receipt: "receipt_order_1",
    };
    try {
      razorpayInstance.orders.create(options, (err, order) => {
        if (err) {
          return res.status(500).json({
            success: false,
            message: "Something went wrong",
          });
        }
        return res.status(200).json(order);
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Something went wrong",
      });
    }
  };

exports.verifyPayment = async (req, res) => {
    const {razorpay_payment_id,razorpay_order_id,signature} = req.body;
    const secret = process.env.RAZORPAY_SECRET_ID;
    const hmac = crypto.createHmac("sha256",secret);
    hmac.update(razorpay_order_id + "|" + razorpay_payment_id);
    const generatedSignature = hmac.digest("hex");
    if(generatedSignature === signature){
        return res.status(200).json({
            success: 'true',
            message : "payment verified"
        })
    }
    else{
        return res.status(400).json({
            success: 'false',
            message : "payment not verified"
        })
    }
}