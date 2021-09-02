const express = require('express');
const app = express();
const PORT = 5000;

// Middleware
app.use(function (req, res, next) {
    res.setHeader('charset', 'utf-8')
    next();
});

// Serve static folder
app.use(express.static('public'));

// API
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start to listening
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));