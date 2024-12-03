const mysql = require('mysql2');

// MySQL connection settings
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',  // Your MySQL username
  password: 'San@2006',  // Your MySQL password
  database: 'trash'  // Your database name
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Connection failed:', err.stack);
    return;
  }
  console.log('Connected as id ' + connection.threadId);
});

// Query to get locations
const query = 'SELECT name, latitude, longitude FROM locations';

connection.query(query, (err, results) => {
  if (err) {
    console.error('Query failed:', err.stack);
    return;
  }

  // Return the results as JSON
  console.log(JSON.stringify(results));
});

// Close the connection
connection.end();
