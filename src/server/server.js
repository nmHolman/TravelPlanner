// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('dist'));

// Setup Server
const PORT = process.env.PORT || 5000;

let server = app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

// POST Route
const data = []

app.post('/add', (req, res) => {
    data.push(req.body);
});

// GET Route
app.get('/data', (req, res) => {
    res.send(data);
});

// Test GET Route
app.get('/test', async (req, res) => {
    res.json({message: 'Yay!'})
})

module.exports = server;