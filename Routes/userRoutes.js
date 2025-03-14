const express = require("express");
const router = express.Router();

// Import controller functions
const {
  register, // Function to handle user registration
  allUsers, // Function to fetch all user details
  remove, // Function to remove a user
  update, // Function to update a user's details
  getUserById,
} = require("../Controller/userController");

// Define user routes
router.post("/submit", register); // Route for registering a new user
router.get("/all-users", allUsers); // Route for retrieving all users
router.get("/details/:id", getUserById); //Route for retriving users by ID
router.delete("/remove", remove); // Route for removing a user
router.put("/update", update); // Route for updating a user's details

// Export the router
module.exports = router;
