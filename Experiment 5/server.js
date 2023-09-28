const http = require('http');
const fs = require('fs');

// Create an HTTP server
const server = http.createServer((req, res) => {
    // Define routes
    if (req.url === '/' || req.url === 'index.html') {
        // Serve the HTML file
        fs.readFile('Experiment 5/index.html', 'utf8', (err, data) => { 
            res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
                console.log(err)
        });
    } 
});

// Listen on port 3000
const port = 3000;
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
