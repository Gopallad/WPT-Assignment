class Employee {
    constructor(firstName, lastName, email, designation, basicSalary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.designation = designation;
        this.basicSalary = basicSalary;
    }

    display() {
        console.log(this.firstName, this.lastName, this.email,
            this.designation, this.basicSalary);
    }

    getFirstName() { return this.firstName; }
    setFirstName(name) { this.firstName = name; }

    getSalary() { return this.basicSalary; }
    setSalary(sal) { this.basicSalary = sal; }
}

module.exports = Employee;