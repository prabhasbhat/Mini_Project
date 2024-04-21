// server.js
import express from 'express';
import sqlite3 from 'sqlite3';
import cors from 'cors';
import bcrypt from 'bcrypt';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use(cors({
  origin: 'http://localhost:8100',
  credentials: true
}));


const usersDB = new sqlite3.Database('Database/users.db');
const reservationsDB = new sqlite3.Database('Database/reservations.db');

usersDB.run(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT,
    password TEXT,
    name TEXT,
    email TEXT,
    mobileNumber TEXT
  )
`);

reservationsDB.run(`
  CREATE TABLE IF NOT EXISTS reservations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
    dateTime TEXT,
    mobileNumber TEXT,
    numberOfPeople INTEGER,
    userId INTEGER,
    FOREIGN KEY (userId) REFERENCES users(id)
  )
`);

app.post('/api/signup', async (req, res) => {
  const { username, password, name, email, mobileNumber } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const stmt = usersDB.prepare('INSERT INTO users (username, password, name, email, mobileNumber) VALUES (?, ?, ?, ?, ?)');
  stmt.run(username, hashedPassword, name, email, mobileNumber, (err) => {
    if (err) {
      console.error('Error creating user:', err);
      res.status(500).json({ message: 'Internal server error' });
    } else {
      res.status(201).json({ message: 'User created successfully' });
    }
  });
  stmt.finalize();
});

app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  usersDB.get('SELECT * FROM users WHERE username = ?', [username], async (err, user) => {
    if (err) {
      console.error('Error retrieving user:', err);
      res.status(500).json({ message: 'Internal server error' });
    } else if (!user) {
      res.status(401).json({ message: 'Invalid username or password' });
    } else {
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (passwordMatch) {
        res.status(200).json({ message: 'Login successful', username: user.username });
      } else {
        res.status(401).json({ message: 'Invalid username or password' });
      }
    }
  });
});

app.get('/api/user', authenticateUser, (req, res) => {
  const { username } = req.user;

  usersDB.get('SELECT * FROM users WHERE username = ?', [username], (err, user) => {
    if (err) {
      console.error('Error retrieving user information:', err);
      res.status(500).json({ message: 'Internal server error' });
    } else if (!user) {
      res.status(404).json({ message: 'User not found' });
    } else {
      res.status(200).json({
        id: user.id,
        username: user.username,
        name: user.name,
        email: user.email,
        mobileNumber: user.mobileNumber,
      });
    }
  });
});

app.post('/api/reservations', authenticateUser, (req, res) => {
  const { name, email, dateTime, mobileNumber, numberOfPeople } = req.body;

  const stmt = reservationsDB.prepare('INSERT INTO reservations (name, email, dateTime, mobileNumber, numberOfPeople, userId) VALUES (?, ?, ?, ?, ?, ?)');
  stmt.run(name, email, dateTime, mobileNumber, numberOfPeople, req.user.id, (err) => {
    if (err) {
      console.error('Error saving reservation:', err);
      res.status(500).json({ message: 'Internal server error' });
    } else {
      res.status(201).json({ message: 'Reservation saved successfully' });
    }
  });
  stmt.finalize();
});

const handleSearch = async () => {
  try {
    // Make a request to your backend API endpoint for search
    const response = await fetch(`http://localhost:5000/api/search?query=${searchQuery}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add any additional headers if required
      },
    });

    if (response.ok) {
      // If the request is successful, parse the response data
      const searchData = await response.json();
      // Redirect to the search results page with the search data
      history.push({
        pathname: '/search',
        state: { searchData },
      });
    } else {
      // If the request fails, handle the error
      console.error('Search failed:', response.status, response.statusText);
      // You can display an error message to the user or handle the error in another way
    }
  } catch (error) {
    // Handle any network or other errors that occur during the search request
    console.error('Error during search:', error);
    // You can display an error message to the user or handle the error in another way
  }
};


function authenticateUser(req, res, next) {
  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const username = verifyAuthToken(authToken);

  if (username) {
    req.user = { username };
    next();
  } else {
    return res.status(401).json({ message: 'Unauthorized' });
  }
}

function verifyAuthToken(authToken) {
  // Implement your token verification logic (e.g., using jsonwebtoken)
  // Return the username if the token is valid, otherwise return null
  return 'exampleUsername';
}

process.on('SIGINT', () => {
  usersDB.close((err) => {
    if (err) {
      console.error('Error closing the users database connection:', err);
    } else {
      console.log('Users database connection closed');
    }
  });

  reservationsDB.close((err) => {
    if (err) {
      console.error('Error closing the reservations database connection:', err);
    } else {
      console.log('Reservations database connection closed');
    }

    process.exit();
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
