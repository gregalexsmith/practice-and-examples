var projectRepo = function() {
  var get = function(id) {
    console.log("Getting project " + id);
    return {
      name: 'new project from db'
    }
  }

  return {
    get: get,
    save: function(project) {
      console.log("Saving project to db");
    }

  }
}

module.exports = projectRepo;
