const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const userRoute = require("./Routes/userRoutes");

const app = express();
const PORT = 4000;

// Middleware for parsing JSON and URL-encoded data
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

// MongoDB Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/UserDB", {})
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.error("Database connection error:", err.message));

// Routes
app.use("/user", userRoute);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
