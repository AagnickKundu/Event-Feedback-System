const express = require("express");

const {
    createEvent,
    getEvents,
    getEventById,
    updateEvent,
    deleteEvent
} = require("../controllers/eventController");

const router = express.Router();

// Create event
router.post("/",createEvent);

// GET all events
router.get("/", getEvents);

// GET single event
router.get("/:id", getEventById);

// UPDATE event
router.put("/:id", updateEvent);

// DELETE event
router.delete("/:id", deleteEvent);

module.exports = router;