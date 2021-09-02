const express = require('express');
const app = express();
const PORT = 8080;

// Serve static folder
app.use(express.static('public'));

// API
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start to listening
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));