// EXAMPLE 1: Basic properties
var car = {color: "blue"};
console.log(car.color); // RESULT: "blue"
console.log(car.position); //RESULT: undefined


// EXAMPLE 2: using Object.create
// Object.create makes a new object that extends the passed-in object's prototype
var truck = Object.create(car);

// Since the car object is a prototype of truck, the lookup on color will return "blue"
truck.position = 2;
console.log(truck.position); //RESULT: 2
console.log(truck.color); //RESULT: "blue"

// this prototype link is ongoing,
// when the original car object is modified, the new properties will be avaliable on any objects that derive from it
car.speed = 25;
console.log(truck.speed); //RESULT: 25

// toString() is a method that is part of the global Object.
// since all objects inherit from the global Object, all of it's methods are avaliable to use
console.log(car.toString());

// constructor is another property of the global Object.
// will point to the Object constructor function for objects
// and the Array constructor function for arrays
console.log(car.constructor);
