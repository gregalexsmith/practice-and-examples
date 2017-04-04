(function() {
  var app = angular.module('taskManager');

  app.factory('Task', function(TaskRepository) {
    var Task = function(data) {
      this.name = data.name;
      this.completed = data.completed;
    }
    Task.prototype.complete = function() {
      this.completed = true;
      this.save();
    };
    Task.prototype.save = function() {
      TaskRepository.save(this);
    }
    return Task;
  })
}())
