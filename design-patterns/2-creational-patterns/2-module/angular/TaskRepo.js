// Task Repo - Module Pattern Example
// Here we simulate database logic encapsulated with the module pattern

(function(){
  var app = angular.module('taskManager');

  var taskRepo = function($http) {
    var get = function(id) {
      console.log("Getting task " + id);
      return {
        name: 'new task from db'
      }
    }
    var save = function(task) {
      console.log("Saving " + task.name + " to db");
    }

    return {
      get: get,
      save: save
    };
  }
  app.service('TaskRepository', taskRepo);
}())
