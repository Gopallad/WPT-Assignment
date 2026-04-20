const fs = require("fs");

// Sync
let data = fs.readFileSync("sample.txt", "utf-8");
console.log("Sync:", data);

// Async
fs.readFile("sample.txt", "utf-8", (err, data) => {
    console.log("Async:", data);
});