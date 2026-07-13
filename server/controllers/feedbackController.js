import Feedback from "../models/Feedback.js";
import Event from "../models/Event.js";

// submitFeedback()
const submitFeedback = async (req, res) => {
    try {
        // Check whether the event exists
        const event = await Event.findById(req.body.eventId);
        if (!event) {
            return res.status(404).json({
                message: "Event not found"
            });
        }

        // Create feedback
        const feedback = await Feedback.create(req.body);
        res.status(201).json(feedback);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

// getAllFeedback()
const getAllFeedback = async (req, res) => {
    try {
        const feedbacks = await Feedback.find()
            .populate("eventId", "title date venue")
            .sort({ createdAt: -1 });
        res.status(200).json(feedbacks);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// getFeedbackByEvent()
const getFeedbackByEvent = async (req, res) => {
    try {
        const feedbacks = await Feedback.find({
            eventId: req.params.eventId
        }).sort({ createdAt: -1 });
        res.status(200).json(feedbacks);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// deleteFeedback()
const deleteFeedback = async (req, res) => {
    try {
        // Check whether the feedback exists
        const feedback = await Feedback.findByIdAndDelete(req.params.id);
        if (!feedback) {
            return res.status(404).json({
                message: "Feedback not found"
            });
        }

        // Delete feedback
        res.status(200).json({
            message: "Feedback deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

export {
    submitFeedback,
    getAllFeedback,
    getFeedbackByEvent,
    deleteFeedback
};
