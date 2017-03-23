// TOPICS:
//  - Object.defineProperty
//  - basic inheritance

// create the object
var task = {
  title: 'My Task',
  description: "My Description"
};

// Add property using defineProperty
Object.defineProperty(task, 'toString', {
  value: function() {
    return this.title + " " + this.description
  },
  // don't allow the property to be overwritten
  writable: false,
  // show the property when enumerating through keys
  enumerable: true,
  // allow the property settings to be changed in the future
  configurable: true
});

// this will not work since writable is false
task.toString = "new value"

// this will work since configurable is set to true
Object.defineProperty(task, 'toString', {
  enumerable: false
})

// create an urgentTask based on task
var urgentTask = Object.create(task);

console.log(task.toString());
