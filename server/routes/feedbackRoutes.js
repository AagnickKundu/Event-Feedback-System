const express = require("express");

const {
    submitFeedback,
    getAllFeedback,
    getFeedbackByEvent,
    deleteFeedback,
} = require("../controllers/feedbackController");

const router = express.Router();

// Submit feedback
router.post("/", submitFeedback);

// Get all feedback
router.get("/", getAllFeedback);

// Get feedback for one event
router.get("/event/:eventId", getFeedbackByEvent);

// Delete feedback
router.delete("/:id", deleteFeedback);

module.exports = router;