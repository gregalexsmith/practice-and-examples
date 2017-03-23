/* Using the 'new' keyword
  - creates a brand new object
  - links to an object prototype
  - Binds 'this' to the new object scrop
  - Implicitly returns this
*/

function NewObject(param1, param2) {
  this.param1 = param1;
  this.param2 = param2;
  this.toString = function() {
    return this.param1 + ' ' + this.param2;
  }
  // return this --> automatically done when using 'new'
}
