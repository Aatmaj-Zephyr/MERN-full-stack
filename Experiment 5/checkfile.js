const fs = require('fs');

// Check if a file or directory exists
fs.access('/Users/aatmaj/MERN-full-stack/Experiment 5/sample.txt', (err) => {
  if (err) {
    console.error('File or directory does not exist.');
  } else {
    console.log('File or directory exists.');
  }
});
