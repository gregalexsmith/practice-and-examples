var taskRepo = function() {
  var get = function(id) {
    console.log("Getting task " + id);
    return {
      name: 'new task from db'
    }
  }

  return {
    get: get,
    save: function(task) {
      console.log("Saving task to db");
    }

  }
}

module.exports = taskRepo;
