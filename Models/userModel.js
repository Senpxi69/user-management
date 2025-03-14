const mongoose = require("mongoose");

// Define the schema for the User collection
const userSchema = new mongoose.Schema({
  name: {
    type: String, // User's name (required)
    required: true,
  },
  email: {
    type: String, // User's email address (required)
    required: true,
  },
  age: {
    type: Number, // User's age (required)
    required: true,
  },
});

// Export the User model
module.exports = mongoose.model("User", userSchema);
