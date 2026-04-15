let person = {
    name: "HruGo",
    age: 25,
    city: "PUNE"
};

 // Convert the object to JSON format
let jsonData = JSON.stringify(person);
console.log("JSON Format:", jsonData);

// Convert the JSON back to Object format
let objectData = JSON.parse(jsonData);
console.log("Object Format:", objectData);