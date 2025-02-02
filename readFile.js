const fs = require('fs');

// Read the file asynchronously (non-blocking)
fs.readFile('myText.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading the file:", err);
        return;
    }
    console.log("File Contents:\n", data);
});
