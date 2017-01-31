//EXAMPLE 1: Basic properties
var car = {color: "blue"};
console.log(car.color); // RESULT: "blue"
console.log(car.position); //RESULT: undefined


//EXAMPLE 2: using Object.create
var truck = Object.create(car);
//Object.create makes a new object that extends the passed-in object's prototype

truck.position = 2;
console.log(truck.position); //RESULT: 2
console.log(truck.color); //RESULT: "blue"
// Since the car object is a prototype of truck, the lookup on color will return "blue"

car.speed = 25;
console.log(truck.speed); //RESULT: 25
// this prototype link is ongoing, so when the original car object is modified, these new properties will be avaliable on any objects that derive from it

console.log(car.toString());
// toString() is a method that is part of the Global Object.
// since all objects inherit from this global object, all of it's methods are avaliable to use

console.log(car.constructor);
// constructor is another property of the Global Object.
// will point to the Object constructor function for objects
// and the Array constructor function for arrays
