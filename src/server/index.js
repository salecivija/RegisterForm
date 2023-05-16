const express = require('express');
const mysql = require('mysql2');

const app = express();
app.use(express.json());

// MySQL database connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'users',
});

// Endpoint for registering a user
app.post('/register', (req, res) => {
  const userData = req.body;

  // Insert the user data into the MySQL database
  connection.query('INSERT INTO users SET ?', userData, (error, results) => {
    if (error) {
      console.log('Failed to insert data:', error);
      res.sendStatus(500);
    } else {
      console.log('Data inserted successfully');
      res.sendStatus(200);
    }
  });
});

// Start the server
app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
