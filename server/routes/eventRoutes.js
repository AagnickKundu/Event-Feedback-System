// const express = require("express");
import express from "express";

import {
    createEvent,
    getEvents,
    getEventById,
    updateEvent,
    deleteEvent
} from "../controllers/eventController.js";

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

export default router;