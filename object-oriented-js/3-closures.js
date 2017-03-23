/*
  Intro to closures
*/
var results = [];
var text1 = "get:";
var getAnimal = function() {
  var animal = randomAnimal();   //1:cat, 2:dog
  results.push(function() {
    var index = randomNum();   //1:3, 2:7, 3:9, 4:2
    console.log(text1 + animal + number);
  })
}

// push a function object to the results array, assigns "cat" to animal
getAnimal();

// now we are calling the function object stored in the results array.
// Any variables assigned during getAnimal() will remain the same and be accesible inside this function object.
// In other words, the function will run inside of the context that it was created.
// this function also assigns the first random value of 3 to index
results[0](); // OUTPUT: "get:cat3"

// Call the function again. The same animal assignment is avaliable here.
// this time, a new value is assigned to index because calling the function again creates a new inner scope.
results[0](); // OUTPUT: "get:cat7"

// push another function object onto the results array, assigns "dog" to animal
// calling this function again creates a new scope that will hold the child function
getAnimal();

// call the second function in the array now.
// this function has no relation to the first function in the array
// It was created in a seperate parent scope and is only allowed to access variables within that scope
results[1](); // OUTPUT: "get:dog9"

// call the first funcion one more time.
// this function still runs within the first parent scope and is not affected by the second function object or second parent scope at all.
results[0](); // OUTPUT: "get:cat2"
