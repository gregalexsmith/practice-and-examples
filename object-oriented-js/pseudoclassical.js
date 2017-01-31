//Pseudoclassical Pattern

//EXAMPLE: Basic Class
var Car = function(loc) {
  //this = Object.create(Car.prototype);  //pseudocode: inserted automatically when using 'new'
  this.loc = loc;
  //return this   //pseudocode: inserted automatically when using 'new'
}
Car.prototype.move = function() {
  this.loc++;
}

//by using the keyword 'new' we run the Car function in a 'constructor' mode
//It 'adds' the first and last lines inside the function
//this simplifies the syntax for creating new class-like objects
var car1 = new Car(3);

console.log(car1);
car1.move();
console.log(car1);

//NOTES
//this pattern allows the seperation of two types of logic for class creation.
//1. In the Car.prototype section, we can specify all parts of the class that will be similar among instances
//2. In the Car function itself, we can speciify all parts of the class that will be different among instances
