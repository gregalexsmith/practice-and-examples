// observable arrays
// detect and respond to a collection of objects
// track what objects are contained in the array, not the state of the objects
// will notify listener when objects are added or removed


// initialize empty array
var myArray = ko.observableArray();
var myArray2 = ko.observableArray([
  {firstName: "John", lastName: "Doe"},
  {firstName: "Bob", lastName: "Williams"}
])

//Add item
myArray.push('Some value')

//Read first item
var firstItem = myArray()([0])

//Read property of first item
var firstItemProp = myArray2()([0]).lastName

//Get length
var length = myArray().length

//indexOf
var index = myArray.indexOf("something")
