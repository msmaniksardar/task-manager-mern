import mongoose from "mongoose";
import bcrypt from "bcryptjs";
const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: [true, "Email address is required"],
            unique: true, // Corrected: 'unique' should be a boolean
        },
        fname: {
            type: String,
            required: [true, "First name is required "],
        },
        lname: {
            type: String,
            required: [true, "Last name is required "],
        },
        mobile: {
            type: String,
            required: [true, "Mobile number is required "],
        },
        password: {
            type: String,
            required: [true, "Password is required "],
            set : (v) => { return bcrypt.hashSync(v, 10);},
        },
        otp: {
            type: String,
            default: "0", // Ensuring default is a string, not a number
        },
    },
    { timestamps: true, versionKey: false }
);

export const userModel = mongoose.model("users", userSchema);
