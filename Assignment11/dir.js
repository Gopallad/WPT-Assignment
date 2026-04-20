const fs = require("fs");

// Create folder
fs.mkdirSync("testDir");

// Read folder
let files = fs.readdirSync(".");
console.log(files);

// Delete folder
fs.rmdirSync("testDir");