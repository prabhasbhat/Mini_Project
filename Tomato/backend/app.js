const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware
app.use(bodyParser.json());

// Signup route
app.post('/signup', (req, res) => {
  // Retrieve the signup data from the request body
  const { username, email, password } = req.body;

  // Perform necessary validation checks
  // For example, check if the username or email already exists in the database

  // Store the user's data in the database (in this example, we're just logging it)
  console.log('New user signup:', { username, email, password });

  // Return a success message to the frontend
  res.json({ message: 'Signup successful' });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
