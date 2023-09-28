const fs = require('fs');

// Read the file into an array of lines and count them
fs.readFile('Experiment 5/sample.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
  } else {
    const lines = data.split('\n');
    console.log(`Line count: ${lines.length}`);
    for(let i =0;i<lines.length;i++) {
      console.log("----",lines[i])
    }
  }
});
