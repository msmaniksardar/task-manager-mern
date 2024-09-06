import mongoose from 'mongoose';


const TaskSchema = new mongoose.Schema({
    title: { type: String, required: [true, "Title is required field"] },
    description: { type: String, required: [true, "Description is required field"] },
    status: { type: String, required: [true, "Status is required field"] },
    user_id: { type: mongoose.Schema.Types.ObjectId, required: [true, "User id is required"] }
}, { timestampst: true, versionKey: false })

export const Tasks = mongoose.model("Tasks", TaskSchema)