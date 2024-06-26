const { User, OTP, sequelize, reset_password_token } = require("../models");
const ApiError = require("../utils/apiError");
const otpGenerator = require("otp-generator");
const { mailSender, printTicket } = require("../utils/mailSender");
const uuid = require('uuid');
const crypto = require('crypto');


const sentOtp = async (email, idUser, next) => {
    let transaction;
    try {
        transaction = await sequelize.transaction();
        const otp = generateOTP()

        const mailResponse = await mailSender(
            email,
            "Verification Email",
            `<div style="font-family: Arial, sans-serif; color: #333; background-color: #f7f7f7; padding: 20px;">
  <img src="https://ik.imagekit.io/ib9lfahbz/finalProject/logo%20skypass%202.png?updatedAt=1717246290829" alt="Logo" style="max-width: 40%; height: auto; margin-bottom: 20px;" />
  <h1 style="color: #333; font-size: 2rem; margin-bottom: 20px;">Halo</h1>
  <h2 style="color: #333; font-size: 1.5rem; margin-bottom: 20px;">Ini adalah kode OTP untuk email ${email}.</h2>
  <h1 style="font-size: 1.5rem;font-weight: bold;background: #A06ECE;color: white;text-align: center;">${otp}</h1>
  <h5 style="color: #333; margin-top: 20px;">perhatian OTP ini hanya valid selama 5 menit sejak email ini dikirim.</h5>
  <h5 style="color: #333;">Jika ada pertanyaan mohon reply ke email ini</h5>
</div>
`
        );
        const currentTime = new Date();

        const newOTP = await OTP.create({
            user_id: idUser,
            email: email,
            OTP_code: otp,
            expired_in: currentTime
        }, { transaction });

        await transaction.commit();

    } catch (error) {
        await transaction.rollback();
        return next(new ApiError("failed to sent OTP", 400));
    }
};
const resendOtp = async (req, res, next) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({
            where: {
                email,
            },
        });

        if (!user) {
            return next(new ApiError("User tidak ditemukan, mohon register terlebih dahulu", 404));
        }
        if (user.is_verified === true) {
            return next(new ApiError("User sudah diverifikasi", 404));
        }

        const existingOTP = await OTP.findOne({ where: { email } })
        if (existingOTP) {
            await existingOTP.destroy()
        }

        const otpId = uuid.v4();
        const otp = generateOTP();
        const newOTP = await OTP.create({
            user_id: user.user_id,
            email: email,
            OTP_code: otp,
            expired_in: new Date()
        });
        const mailResponse = await mailSender(
            email,
            "Verification Email - OTP",
            `<div style="font-family: Arial, sans-serif; color: #333; background-color: #f7f7f7; padding: 20px;">
  <img src="https://ik.imagekit.io/ib9lfahbz/finalProject/logo%20skypass%202.png?updatedAt=1717246290829" alt="Logo" style="max-width: 40%; height: auto; margin-bottom: 20px;" />
  <h1 style="color: #333; font-size: 2rem; margin-bottom: 20px;">Halo</h1>
  <h2 style="color: #333; font-size: 1.5rem; margin-bottom: 20px;">Ini adalah kode OTP baru untuk email ${email}.</h2>
  <h1 style="font-size: 1.5rem;font-weight: bold;background: #A06ECE;color: white;text-align: center;">${otp}</h1>
  <h5 style="color: #333; margin-top: 20px;">perhatian OTP ini hanya valid selama 5 menit sejak email ini dikirim.</h5>
  <h5 style="color: #333;">Jika ada pertanyaan mohon reply ke email ini</h5>
</div>
`
        );

        res.status(200).json({
            is_success: true,
            code: 200,
            data: {},
            message: "OTP resent successfully, please check your email",

        });
    } catch (error) {
        next(new ApiError("Failed to resend OTP", 500));
    }
};
const generateOTP = () => {
    // return otpGenerator.generate(6, { digits: true, alphabets: false, upperCase: false, specialChars: false });
    return crypto.randomInt(100000, 999999).toString();
};
const sentResetPassword = async (link, email, token, idUser, next) => {
    let transaction;
    try {
        transaction = await sequelize.transaction();

        const mailResponse = await mailSender(
            email,
            "Reset Password",
            `<div style="font-family: Arial, sans-serif; color: #333; background-color: #f7f7f7; padding: 20px;">
            <img src="https://ik.imagekit.io/ib9lfahbz/finalProject/logo%20skypass%202.png?updatedAt=1717246290829" alt="Logo" style="max-width: 40%; height: auto; margin-bottom: 20px;">
            <h1 style="color: #333; font-size: 2rem; margin-bottom: 20px;">Halo</h1>
            <h2 style="color: #333; font-size: 1.5rem; margin-bottom: 20px;">Server kami menerima permintaan reset password untuk akun dengan email ${email}.</h2>
            <h2 style="color: #333; font-size: 1.rem; margin-bottom: 20px;">Jika anda tidak merasa melakukan request ini mohon abaikan email ini.</h2>
            <p style="color: #333; margin-bottom: 20px;">perhatian: link ini hanya valid untuk 15 menit.</p>
            <h1 style="font-weight: bold; background: #A06ECE; hover: #9a5ed1; color: white; text-align: center; padding: 10px; margin-bottom: 20px;"><a href=${link}>Password Reset Link</a> </h1>
          </div>
          `
        );

        const currentTime = new Date();
        const fifteenMinutesLater = new Date(currentTime.getTime() + 15 * 60000); // 15 minutes in milliseconds

        const newResetPassword = await reset_password_token.create({
            user_id: idUser,
            email: email,
            token: token,
            expired_in: fifteenMinutesLater
        }, { transaction });

        await transaction.commit();

    } catch (error) {
        console.log(error.message);
        // await transaction.rollback(); 
        return next(new ApiError("failed to sent OTP", 400));
    }
};
const sentTicket = async (req, res, next) => {
    try {
        const { email } = req.body;

        const mailResponse = await printTicket(
            email,
            "Your Ticket ",
            `<div style="font-family: Arial, sans-serif; color: #333; background-color: #f7f7f7; padding: 20px;">
            <img src="https://ik.imagekit.io/ib9lfahbz/finalProject/logo%20skypass%202.png?updatedAt=1717246290829" alt="Logo" style="max-width: 40%; height: auto; margin-bottom: 20px;">
            <h1 style="color: #333; font-size: 2rem; margin-bottom: 20px;">Halo</h1>
            <h2 style="color: #333; font-size: 1.5rem; margin-bottom: 20px;">Server kami menerima permintaan cetak tiket akun dengan email ${email}.</h2>
            <h2 style="color: #333; font-size: 1.rem; margin-bottom: 20px;">Jika anda tidak merasa melakukan request ini mohon abaikan email ini.</h2>
            <p style="color: #333; margin-bottom: 20px;">perhatian: link ini hanya valid untuk 15 menit.</p>
          </div>
          `
        );
        res.status(200).json({
            is_success: true,
            code: 200,
            data: {},
            message: "Ticket sent successfully, please check your email",

        });
    } catch (error) {
        console.log(error.message);
        // await transaction.rollback(); 
        return next(new ApiError("failed to sent OTP", 400));
    }
};
module.exports = {
    sentOtp, resendOtp, sentResetPassword, sentTicket
}