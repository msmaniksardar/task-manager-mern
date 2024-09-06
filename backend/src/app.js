import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser"
import hpp from "hpp";
import bodyParser from "body-parser";
import helmet from "helmet";
import xss from "xss-clean";
import createHttpError from "http-errors";
import rateLimit from "express-rate-limit";
import { REQUEST_LIMIT_NUMBER, REQUEST_SIZE_LIMIT, REQUEST_TIME_LIMIT, URL_ENCODED, WEB_CACHE } from "./config/config.js";
import { router } from './routes/api.js';

export const app = express();

// SECURITY APPLY 
app.use(cors());
app.use(hpp());
app.use(cookieParser());
app.use(helmet());
app.use(xss());

// REQUEST SIZE AND LIMIT 
app.use(express.json({ limit: REQUEST_SIZE_LIMIT }));
const setRateLimt = rateLimit({
    windowMs: REQUEST_TIME_LIMIT,
    limit: REQUEST_LIMIT_NUMBER
})

app.use(setRateLimt);

// USE URL-ENCODED 
app.use(bodyParser.urlencoded({ extended: URL_ENCODED }));
app.use(bodyParser.json());

// WEB CACHE 
app.set("etag", WEB_CACHE)

// ROUTE USE 
app.use("/api" , router);


// Handle Client errors
app.use((req, res, next) => {
   createHttpError(404 , "BAD URL REQUEST")
   next();
  });
  
  // Handle server errors
  app.use((err, req, res, next) => {
    createHttpError( 500 ,`INTERNAL SERVER ERROR${err}`)
  });