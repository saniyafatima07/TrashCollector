const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());

// MySQL connection settings
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'San@2006',
    database: 'trash'
});

// API to fetch locations
app.get('/locations', (req, res) => {
    const query = 'SELECT name, latitude, longitude FROM locations';
    connection.query(query, (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Database query failed');
        } else {
            res.json(results);
        }
    });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
