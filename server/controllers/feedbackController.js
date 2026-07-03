const Feedback = require("../models/Feedback");
const Event = require("../models/Event");

// submitFeedback()
const submitFeedback = async (req, res) => {
    try {
        // Check whether the event exists
        const event = await Event.findById(req.body.event);
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
            .populate("event", "title date location")
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
            event: req.params.eventId
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

module.exports = {
    submitFeedback,
    getAllFeedback,
    getFeedbackByEvent,
    deleteFeedback
};
