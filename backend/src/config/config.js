// Import and configure dotenv
import dotenv from 'dotenv/config';


// Set up configuration variables
export const PORT = process.env.PORT || 3000; // Default to 3001 if not set
export const SERVER_URL = process.env.SERVER_URL || 'mongodb+srv://anonymousmanik:mongodbpassword@mern-6.3kmhf.mongodb.net/TaskManager'; // Replace with your default server URL if any
export const URL_ENCODED = process.env.URL_ENCODED === 'true'; // Converts to boolean
export const REQUEST_TIME_LIMIT = Number(process.env.REQUEST_TIME_LIMIT) || 15 * 60 * 1000; // Default to 15 minutes
export const REQUEST_LIMIT_NUMBER = Number(process.env.REQUEST_LIMIT_NUMBER) || 300;
export const REQUEST_SIZE_LIMIT = process.env.REQUEST_SIZE_LIMIT || '50mb';
export const WEB_CACHE = process.env.WEB_CACHE === 'true'; // Converts to boolean
export const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || "amarsonarbangla@@11349";
export const JWT_EXPIRE_TIME =  30 * 24 * 60 * 1000 ;
export const EMAIL_HOST = process.env.EMAIL_HOST || "smtp.gmail.com"
export const EMAIL_PORT = process.env.EMAIL_PORT || 587
export const EMAIL_USER = process.env.EMAIL_USER || "anonymousmanik@gmail.com"
export const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD || "mckvsyxkyzpxqdku"