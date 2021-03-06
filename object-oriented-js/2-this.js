// keyword 'this'
// 'this' gets bound to the correct object automatically by the interpreter
// typically refers to the object to 'the left of the dot' when calling a function.

//EXAMPLE 1
var car = {
  drive: function() {
    console.log(this);
  }
};
// 'this' only becomes relevent when the function is actually called
// In this case it will refer to the car object because it is the parent object that called it.
car.drive();


// EXAMPLE 2
// setup
var car = {type: "car"},
    truck = {type: "truck"},
    bike = {type: "bike"},
    printer = {};

var print = function(a, b) {
  console.log("\n\n\n")
  console.log(this, a, b)
};

// when the function is called on its own in the global scope, the interpreter will automatically assign the value of 'this' to the global object.
print(car, truck) // RESULT: global object, {type: 'car'}, {type: 'truck'}

// now assign function object 'print' to property in printer object
// 'this' will now refer to the parent object (printer)
printer.print = print;
printer.print(car, truck);  //RESULT: {print: [f]}, {type: 'car'}, {type: 'truck'}


// EXAMPLE 3: Using 'call'
// 'call' allows a function to be run within an chosen object's scope.
// The function will not be added to the objects properties list, but will temporarly bind 'this' to that object
var printer2 = {name: 'printer2'};
print.call(printer2, car, truck); //RESULT: {name: 'printer2'}, {type: 'car'}, {type: 'truck'}

// 'call' can also be used to overide the method's access rules.
// Even though 'this' would normally be the printer object, using 'call' allows us to run the function within printer2's scope
printer.print.call(printer2, car, truck); //RESULT: {name: 'printer2'}, {type: 'car'}, {type: 'truck'}


//EXAMPLE 4: Callback functions
var fakeTimeout = function(callback, delay) {
  var counter = 0;
  while(counter < delay) {
    counter++;
  }
  callback();
}
// Passing a function as a callback to another function gives unexpected results when using 'this'
fakeTimeout(print, 100); //ERROR
// when print() is called in fakeTimout, there is no referance to the 'a' and 'b' arguments -> error
// and 'this' will refer to the global scope (it is not being called as a property of a parent object)

//PROPER WAY
fakeTimeout(function() {
  printer.print(car, truck);
}, 100);
// In this case, we have control over the input argumets
// also, 'this' is clear, and will be assigned to the object that calls the print function (printer object)
