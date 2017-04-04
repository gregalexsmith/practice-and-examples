// Task.js
// Holds all properties + methods related to Task in our app

(function() {
  // get a referance to angular app
  var app = angular.module('taskManager');

  // allows Task to be loaded into angular app
  app.factory('Task', function() {
    var Task = function(data) {
      this.name = data.name;
      this.completed = data.completed;
    }
    Task.prototype.complete = function() {
      this.completed = true;
    };
    Task.prototype.save = function() {
      console.log('Saving Task: ' + this.name);
    }
    return Task;
  })
}())
