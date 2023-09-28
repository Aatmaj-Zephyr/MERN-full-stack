const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;

app.get('/file', (req, res) => {
  const filePath = 'Experiment 5/sample.txt';
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading the file');
    } else {
      res.send(data);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
