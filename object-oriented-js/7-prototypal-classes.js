//Prototypal Classes

//EXAMPLE 1: basic prototypal class
var Car = function(loc) {
  // start with creating a new object that inherits properties from the methods object
  var obj = Object.create(Car.methods);
  obj.loc = loc;
  return obj;
}
Car.methods = {
  move: function() {
    this.loc++;
  }
}
//create a new instance of the Car class
var car1 = Car(3);
console.log(car1);
// now call car1.move(), which will move up the prototype chain to the Car.methods object
car1.move();
//still affects the car1 object as it should
console.log(car1);


//EXAMPLE 2: using '.prototype'
var Truck = function(loc) {
  // start with creating a new object that inherits properties from the prototype object
  var obj = Object.create(Truck.prototype);
  obj.loc = loc;
  return obj;
}
Truck.prototype.move = function() {
  this.loc++;
}
// '.prototype' is a default object that comes with every function
// it's there because the pattern of creating objects as seen in EXAMPLE 1 was so common
// We still have to use Object.create to tell the program to look at Truck.prototype for missing properties, it's just a default object that the language provides.
var truck1 = Truck(7);


//EXAMPLE 3: prototype.constructor and instanceof
//we can use the constructor property to find out which class constructed a certain object
console.log(Truck.prototype.constructor); //Truck
console.log(truck1.constructor);    //Truck

// can the right object's prototype object be found anywhere in the left objects prototype chain?
console.log(truck1 instanceof Truck)  //true
