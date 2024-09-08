import {userModel} from "../models/userModel.js";
import {errorResponse, successResponse} from "./responseController.js";
import {tokenEncode} from "../utility/tokenUtility.js";
import bcrypt from "bcryptjs";
import res from "express/lib/response.js";
import {sendEmail} from "../utility/emailUtility.js";




export const userRegistration = async (req, res, next) => {
    try {
        const reqBody = req.body;
        const EmailExist = await userModel.findOne({email: reqBody.email});
        if (EmailExist) {
            return errorResponse(res, {statusCode: 400, message: "Email already exists"});
        }
        const data = await userModel.create(reqBody);
        return res.status(200).json({
            status: 'success', message: 'Successfully registered user', data: data
        });
    } catch (err) {
        next(err)
    }
}
export const userLogin = async (req, res, next) => {
    try {
        const reqBody = req.body;
        const user = await userModel.findOne({email: reqBody.email});
        if (!user) {
            return errorResponse(res, {statusCode: 400, message: "Email Doesn't exist.Please register First"});
        }
        const isPasswordValid = await bcrypt.compare(reqBody.password, user.password);
        if (!isPasswordValid) {
            errorResponse(res, {statusCode: 400, message: "Password doesn't match"});
        }

        // Create Token
        // const token = jwt.sign( {userId : user._id , email:user.email} , JWT_SECRET_KEY, {expiresIn:JWT_EXPIRE_TIME});
        // console.log(token);
        const token = tokenEncode(user._id, user.email);
        console.log(token);
        return successResponse(res, {
            statusCode: 200, message: 'Successfully logged in', payload: token
        });

    } catch (e) {
        next(e);
    }
}
export const userProfileDetails = async (req, res, next) => {
    try {
        const userId = req.headers.userId;
        console.log(userId);
        // Check if userId is provided
        if (!userId) {
            return errorResponse(res, {
                statusCode: 400, message: "User ID not provided in headers"
            });
        }
        // Validate the userId here if possible

        const user = await userModel.findOne({_id: userId});
        // Check if user exists
        if (!user) {
            return errorResponse(res, {statusCode: 400, message: "User not found"});
        }
        return successResponse(res, {
            statusCode: 200, message: "User profile details", payload: user
        });
    } catch (err) {
        // Log the error for debugging purposes if necessary
        console.error(err);
        return errorResponse(res, {statusCode: 500, message: "Internal server error"});
    }
};
export const userProfileUpdate = async (req, res, next) => {
    try {
        const userId = req.headers.userId;
        if (!userId) {
            errorResponse(res, {statusCode: 400, message: "User ID not provided in headers"})
        }
        const reqBody = req.body;
        const updatedUser = await userModel.findOneAndUpdate({_id: userId}, reqBody, {new: true});
        return successResponse(res, {statusCode: 200, message: "User profile updated", payload: updatedUser});

    } catch (err) {
        next(err);
    }
}
export const userEmailVerify = async (req, res, next) => {
    try {
        const email = req.params.email;
        const data = await userModel.findOne({email: email});
        if (!data) {
            return errorResponse(res, {statusCode: 400, message: "Email doesn't match"});
        }

        // SENT EMAIL
        const code = Math.floor(100000 + Math.random() * 900000);
        const emailTo = email.toLowerCase();
        const emailSubject = "Email Verification"
        const emailText = `Your Email Verification Code :${code}`;
        await sendEmail(emailTo, emailSubject, emailText);

        // Update OTP
        await userModel.findOneAndUpdate({email: email}, {otp: code});
        return successResponse(res, {
            statusCode: 200, message: `Check Your Email Verification Code. Your Email Address ${email}`,
        });

    } catch (err) {
        next(err);
    }
}
export const userCodeVerify = async (req, res, next) => {
    try {
        const reqBody = req.body;
        const data = await userModel.findOne({email: reqBody.email, otp: reqBody.otp});
        if (!data) {
            errorResponse(res, {statusCode: 400, message: "Wrong Email or Verification Code"});
        }
        successResponse(res, {statusCode: 200, message: "Successfully verified",});
    } catch (e) {
        next(e)
    }
}
export const userPasswordReset = async (req, res, next) => {
    try {
        const reqBody = req.body;
        const data = await userModel.findOne({email: reqBody.email, otp: reqBody.otp});
        if (!data) {
            errorResponse(res, {statusCode: 400, message: "Wrong verification Code"});
        }
        await userModel.findOneAndUpdate({email: reqBody.email}, {otp: "0", password: reqBody.password});
        successResponse(res, {statusCode: 200, message: "Password reset successfully",});
    } catch (err) {
        next(err)
    }
}
