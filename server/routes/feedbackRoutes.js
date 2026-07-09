import express from "express";

import {
    submitFeedback,
    getAllFeedback,
    getFeedbackByEvent,
    deleteFeedback,
} from "../controllers/feedbackController.js";

const router = express.Router();

// Submit feedback
router.post("/", submitFeedback);

// Get all feedback
router.get("/", getAllFeedback);

// Get feedback for one event
router.get("/event/:eventId", getFeedbackByEvent);

// Delete feedback
router.delete("/:id", deleteFeedback);

export default router;