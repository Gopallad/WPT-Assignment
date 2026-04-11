function Person(name, age) {
    this.name = name;
    this.age = age;
}
function mobile(model,price){
    this.model=model;
    this.price=price;
}

function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}
function friend(name,roll){
    this.name = name;
    this.roll = roll;
}

friend.prototype.print = function(){
    console.log("name",this.name,"roll:",this.roll)
}

// Add print function using prototype
Person.prototype.shreyash = function () {
    console.log("Name:", this.name, "Age:", this.age);
};

Car.prototype.display = function () {
    console.log("Brand:", this.brand, "Model:", this.model);
};
mobile.prototype.print =function(){
    console.log("Model:",this.model,"price:",this.price);
}

// Create instances
let p1 = new Person("HruGo", 25);
let c1 = new Car("Toyota", "Camry");
let s1 = new mobile("iphone",50000);
let s2= new friend("hrutik",0);

p1.shreyash();
c1.display();
s1.print();
s2.print();