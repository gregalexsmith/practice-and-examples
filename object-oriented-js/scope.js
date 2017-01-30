/*
  Creating a Lexical Scope
*/
var globalVar;
//function definiton creates a new lexical scope
var myFunction1 = function() {
  var scopeVar;
  //can access both globalVar and scopeVar within this scope
};
//cannot access scopeVar outside of myFunction scope


/*
  Scope tricks
*/
var myFunction2 = function() {
  scopeVar = "bad practice";
  // in this case, scopeVar will actually be a global variable
  // javascript will lift all undeclared variables to the global scope automatically
};
