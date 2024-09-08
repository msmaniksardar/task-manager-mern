import jwt from 'jsonwebtoken';
import {errorResponse} from "../controllers/responseController.js";
import {JWT_EXPIRE_TIME, JWT_SECRET_KEY} from "../config/config.js";
import res from "express/lib/response.js";

export const tokenEncode =  (userId, email) => {
    try {
        const payload = {userId: userId, email: email};
        const SECRET_KEY = JWT_SECRET_KEY;
        const Options = {expiresIn: JWT_EXPIRE_TIME};
        return jwt.sign(payload, SECRET_KEY, Options);
    } catch (err) {
        return errorResponse(res, {statusCode: 400, message: "Failed to Create Token"});
    }
}

export const tokenDecode = (token) => {
    try {
       return jwt.verify(token, JWT_SECRET_KEY);
    }catch(err) {
       return null
    }
}