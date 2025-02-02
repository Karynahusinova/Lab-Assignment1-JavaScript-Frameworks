
const fs = require('node:fs');

// Read the file using a non-blocking method
fs.readFile('myText.txt','utf-8', (err, data) =>{
// Check if there was an error while reading the file
if (err) {
console.log("Error reading the file:", err);
} else {
// If there is no error, print the content of the file to the console
console.log("The file content:", data);}
});
