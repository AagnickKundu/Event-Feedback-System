// const express = require("express");
// const dotenv = require("dotenv");
// const cors = require("cors");
// const errorHandler = require("./middleware/errorHandler");
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import errorHandler from "./middleware/errorHandler.js";

// const connectDB = require("./config/db");
import connectDB from "./config/db.js";

// const eventRoutes = require("./routes/eventRoutes");
// const feedbackRoutes = require("./routes/feedbackRoutes");
import eventRoutes from "./routes/eventRoutes.js";
import feedbackRoutes from "./routes/feedbackRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/events", eventRoutes);
app.use("/api/feedback", feedbackRoutes);

app.get("/", (req, res) => {
    res.send("API Running...");
});

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
