// A decorator function takes an object and augments its properties before returning the result;

//EXAMPLE 1
var changeCar = function(obj, loc) {
  obj.loc = loc
  return obj;
}
car1 = changeCar({}, 2); // car1 = {loc: 2}
var car2 = changeCar({}, 7); // car2 = {loc: 7}
console.log("Car 1:", car1);


//EXAMPLE 2: adding methods to decorators
var move = function() {
  this.loc++
}
var changeTruck = function(obj, loc) {
  obj.loc = loc;
  // add the move function defined above
  // this allows the changeTruck decorator to add methods that can be called on inherited objects.
  obj.move = move;
  return obj;
}
truck1 = changeTruck({}, 4);
console.log("Truck 1", truck1);
// when move is called, 'this' refers to the truck1 object and its 'loc' property is changed
truck1.move();
console.log("Truck 1", truck1);



//EXAMPLE 3 using closure to modify object values
var changeBike = function(obj, loc) {
  obj.loc = loc;
  obj.move = function() {
    obj.loc++;
  }
  return obj;
}
// In this case, a new move function is created every time changeBike is called.
// This allows us to use a closure to access the parent scope at the time of function assignment.
var bike1 = changeBike({name: "bike1"}, 5);
console.log("Bike 1", bike1);
// when move is called, obj still refers to the variable stored in the changeBike scope
// so we still have access to all of it's properties and can modify its location
bike1.move();   // changes bike1.loc from 5 to 6
console.log("Bike 1", bike1);


//for further testing...

// by calling changeBike again, we create a new parent scope
// a new local variable for obj is created in this scope to be referanced later by the move function
var bike2 = changeBike({name: "bike2"}, 3);
console.log("Bike 2", bike2);
bike2.move();   // changes bike2.loc from 3 to 4
console.log("Bike 2", bike2);
bike1.move();   // changes bike1.loc from 6 to 7
console.log("Bike 1", bike1);
