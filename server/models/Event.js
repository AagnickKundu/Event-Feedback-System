import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    venue: { type: String, required: true, trim: true },
    category: { type: String, required: true, trim: true },
    image: { type: String, default: "" }
},
    {
        timestamps: true,
    }
);

export default mongoose.model("Event", eventSchema);
