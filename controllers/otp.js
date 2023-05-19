const Otp =  require('../models/otp');
const nodemailer = require('nodemailer');
const User = require('../models/signup');
const bcrypt = require('bcrypt');
require('dotenv').config();

postOtp = async (req, res, next) => {

    try {
        
        const otp = String(req.body.otp);

        // const userId = req.headers

  
        const otps = await OTP.findOne({ userId: userId, otp : otp });
        if(otps != null){

            res.status(200).json({
                statusCode: 200,
                statusMessage: "OK",
                result: {
                    success: "OTP is matched!"
                },
                data: {
                    token: token
                }
            })
        }
        else{

        }
    }
    catch(err){
        throw err;
    }
}

module.exports = {
    postOtp
}