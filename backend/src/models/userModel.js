import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email address is required"]
    },
    fname: {
        type: String,
        required: [true, "First name is required "]
    },
    lname: {
        type: String,
        required: [true, "Last name is required "]
    },
    mobile: {
        type: String,
        required: [true, "Mobile number is required "]
    },
    password: {
        type: String,
        required: [true, "Password is required "]
    },
    otp: { type: String, defaul: 0 },

}, { timestamps: true, versionKey: false }
)

export const Users = mongoose.model("users", userSchema);