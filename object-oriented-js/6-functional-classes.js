//Classes, Functional Classes, Constructor Functions

// A class is similar to a decorator function, but it does not take an existing object as an input
// instead, it generates a new object on its own while augmenting its properties before returning it

//EXAMPLE 1: Basic Class
var Car = function(loc) {
  var obj = {loc: loc};
  obj.move = function() {
    obj.loc++;
  }
  return obj;
}
// now create a new instance of the Car class
var car1 = Car(3);
console.log("Car 1", car1);

//EXAMPLE 2: adding methods to a class
//A way to add methods to a class without duplicating the function objects every time a new instance is created. Still a bit clutered, but good to know
var Truck = function(loc) {
  var obj = {loc: loc};
  //extend(obj, Truck.methods); //pseudocode
  //add all properties of Truck.methods to obj
  obj.move = Truck.methods.move;
  return obj;
};
Truck.methods = {
  move: function() {
    this.loc++;
  }
}
var truck1 = Truck(3);
console.log("Truck 1", truck1);
truck1.move();
console.log("Truck 1", truck1);
