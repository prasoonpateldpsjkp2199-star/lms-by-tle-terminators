const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors()); // Allow frontend to connect
app.use(express.json()); // Allow server to read JSON data

// A simple "database" (just an array for now)
let users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
];


// Define an API Endpoint (The route the frontend will call)
app.get('/api/users', (req, res) => {
    res.json(users); // Send the data back to the frontend
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});