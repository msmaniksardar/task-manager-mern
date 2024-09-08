import {tokenDecode} from "../utility/tokenUtility.js";
import {errorResponse} from "../controllers/responseController.js";

export const authMiddleware = (req, res, next) => {
    try {
        const getToken = req.headers.token;
        if (!getToken) {
            return errorResponse(res, {
                statusCode: 401,
                message: "Please provide token",
            });
        }

        const decoded =  tokenDecode(getToken);
        if (!decoded) {
            return errorResponse(res, {
                statusCode: 401,
                message: "Unauthorized",
            });
        }

        let userId = decoded.userId;
        let email = decoded.email;
        req.headers.userId = userId;
        req.headers.email = email;


        next();
    } catch (err) {
        return errorResponse(res, {
            statusCode: 400,
            message: "Failed to verify token",
        });
    }
};