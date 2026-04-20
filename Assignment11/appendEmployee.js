const fs = require("fs");
const Employee = require("./Employee");

let emp = new Employee("Ram", "Sharma", "ram@mail.com", "Manager", 50000);

let data = `${emp.firstName} ${emp.lastName} ${emp.designation}\n`;

fs.appendFile("Employee.txt", data, (err) => {
    console.log("Employee Added");
});