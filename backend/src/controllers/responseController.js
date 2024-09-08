export const errorResponse = (res, { statusCode = 500, message = "INTERNAL SERVER ERROR" }) => {
    return res.status(statusCode).json({
        success: false,
        message: message
    })
}
export const successResponse = (res, { statusCode = 200, message = "SUCCESSFULL", payload = {} }) => {
    return res.status(statusCode).json({
        success: true,
        message: message,
        payload
    })
}