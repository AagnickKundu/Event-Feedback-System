const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const errorHandler = require("./middleware/errorHandler");

const connectDB = require("./config/db");

const eventRoutes = require("./routes/eventRoutes");
const feedbackRoutes = require("./routes/feedbackRoutes");

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
