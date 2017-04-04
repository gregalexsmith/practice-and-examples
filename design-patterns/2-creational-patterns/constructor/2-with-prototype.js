var Task = function(name) {
  this.name = name;
  this.completed = false;
}

Task.prototype.complete = function() {
  console.log('completing task: ' + this.name);
  this.completed = true;
}

Task.prototype.save = function() {
  console.log('saving task: ' + this.name);
}

// Now all instances of Task will always point back to the same prototype
var task1 = new Task('create a demo for constructors');
