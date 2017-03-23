//Start with a Car super class
//Other Classes will inherit from this one
var Car = function(loc) {
  this.loc = loc;
}
Car.prototype.move = function() {
  this.loc++;
}

//A RaceCar class that will inherit from Car
var RaceCar = function(loc) {
  //by using Car.call() we are executing the Car function within a chosen context.
  //'this' refers to the object created we call RaceCar with the 'new' keyword in front of it.
  Car.call(this, loc);
}

//We must also setup the prototype chain for RaceCar
//By using Object.create(), we can assign the RaceCar prototype object to copy the Car prototype object.
//This is an efficent way to do it since we don't have to run the Car function at all.
//RaceCar.prototype = new Car() was a typical approach before Object.create was standardized
RaceCar.prototype = Object.create(Car.prototype);
//Must also set the constructor
RaceCar.prototype.constructor = RaceCar
//Previous to the above line, the RaceCar constructor would have pointed to Car

// now create a new instance of RaceCar
var raceCar1 = new RaceCar(3);
console.log(raceCar1);
raceCar1.move()
console.log(raceCar1);
