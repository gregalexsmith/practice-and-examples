// The controller logic can be cleaned up by moving all Task related logic into a seperate factory

// BEFORE
function before() {
  var app = angular.module('taskManager', []);

  var taskController = function() {
    var ctrl = this;
    ctrl.tasks = [{name: 'task 1'}, {name: 'task 2', completed: true}];
    this.complete = function(item) {
      ctrl.tasks[item].completed = true;
    }
  };

  app.controller('taskCtrl', taskController);
}

// AFTER
(function(){
  var app = angular.module('taskManager', []);

  var taskController = function(Task) {
    var ctrl = this;
    ctrl.tasks = [
      new Task({name: 'task 1'}),
      new Task({name: 'task 2', completed: true})
    ];
  };

  app.controller('taskCtrl', taskController);
}())
