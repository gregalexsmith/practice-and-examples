//Functional Super Classes

//This Car class will act as a 'super class' for the next two classes.
//NOTE: it is just like a regular class, nothing is different compared to the functional example.
var Car = function(loc) {
  var obj = {loc: loc};
  obj.move = function() {
    obj.loc++;
  }
  return obj;
}

//The RaceCar class is the first Sub Class created that derives from the Car class.
//Instead of starting with an empty object, the internal obj variable is assigned to a new instance of the Car class.
//Then, other properties can be assigned that are specific to the RaceCar
var RaceCar = function(loc) {
  var obj = Car(loc);
  var speed = function() {/* ... */};
  return obj;
}

//Another exmaple:
var OldCar = function(loc) {
  var obj = Car(loc);
  var breakDown = function() {/* ... */};
  return obj
}
