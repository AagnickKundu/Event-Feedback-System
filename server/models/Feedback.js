import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
    eventId: { type: mongoose.Schema.Types.ObjectId, ref: "Event", required: true },
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, lowercase: true, trim: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String, required: true, trim: true }
},
{
    timestamps: true
});

export default mongoose.model("Feedback",feedbackSchema);
