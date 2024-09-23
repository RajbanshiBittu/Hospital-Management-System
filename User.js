const mongoose = require('mongoose');

// Define a schema for users
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

// Create a model based on the schema
const User = mongoose.model('User', userSchema);

module.exports = User;  // Export the model to use in other files


const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User'); // Import the User model
const app = express();

// MongoDB connection code (same as above)
mongoose.connect('mongodb://localhost:27017/myDatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware to parse JSON
app.use(express.json());

// Route to add a new user
app.post('/users', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    // Create a new user
    const newUser = new User({ name, email, password });
    await newUser.save();
    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    res.status(400).json({ error: 'Error creating user', details: error });
  }
});

// Route to retrieve all users
app.get('/users', async (req, res) => {
  try {
    const users = await User.find(); // Fetch all users from the database
    res.json(users);
  } catch (error) {
    res.status(400).json({ error: 'Error fetching users', details: error });
  }
});

// Server code (same as above)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
