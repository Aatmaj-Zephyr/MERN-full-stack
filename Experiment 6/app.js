const express = require('express');
const app = express();
const port = 3000;

app.use('/public', express.static('public'));

// Define a route for the Sign-up Page
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname }); // Serve the index.html file
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
