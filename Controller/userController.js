const User = require("../Models/userModel"); // Import the User model

// Register a new user
module.exports.register = async (req, res) => {
  try {
    const { name, email, age } = req.body; // Extract user details from request body

    const user = new User({
      name,
      email,
      age,
    }); // Create a new User instance

    await user.save(); // Save the user to the database

    res.status(201).json({ message: "User saved successfully" }); // Send success response
  } catch (err) {
    console.error("Error registering user:", err); // Log the error
    res.status(500).json({ error: "Internal Server error" }); // Send server error response
  }
};

// Get all users
module.exports.allUsers = async (req, res) => {
  try {
    const userDetails = await User.find({}); // Retrieve all users from the database

    res.status(200).json(userDetails); // Send retrieved user details as the response
  } catch (error) {
    console.error("Error fetching user details:", error); // Log the error
    res.status(500).json({ message: "Internal server error" }); // Send server error response
  }
};

// Remove a user
module.exports.remove = async (req, res) => {
  try {
    const { id } = req.body; // Extract user ID from request body

    // Validate if ID is provided
    if (!id) {
      return res.status(400).json({ message: "User ID is required" });
    }

    // Check if the user exists
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Remove the user from the database
    await User.findByIdAndDelete(id);

    res.status(200).json({ message: "User removed successfully" }); // Send success response
  } catch (error) {
    console.error("Error removing user:", error); // Log the error
    res.status(500).json({ message: "Internal server error" }); // Send server error response
  }
};

// Update a user's details
module.exports.update = async (req, res) => {
  try {
    const { id, name, email, age } = req.body; // Extract user ID and new details from request body

    // Find the user by ID
    const user = await User.findById(id);

    // Validate if the user exists
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Update user fields if new values are provided
    if (name) user.name = name;
    if (email) user.email = email;
    if (age) user.age = age;

    // Save updated user details to the database
    await user.save();

    res.status(200).json({ message: "User updated successfully" }); // Send success response
  } catch (err) {
    console.error("Error updating user:", err); // Log the error
    res.status(500).json({ error: "Internal Server Error" }); // Send server error response
  }
};

module.exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
