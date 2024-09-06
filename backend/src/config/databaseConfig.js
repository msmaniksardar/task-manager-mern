import mongoose from "mongoose";
import { SERVER_URL } from "./config.js";

export const DATABASE_CONNECTION = async () => {
    try {
       await mongoose.connect(SERVER_URL, { autoIndex: true });
        console.log(`DATABASE CONNECTION SUCCESSFULLY`)
    } catch (error) {
        console.log(`FAILED TO CONNECT DATABASE ${error}`)
    }
}

