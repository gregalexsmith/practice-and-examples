// Module Patterns
// simple way to encapsulate methods
// create a toolbox of functions to use

// usually need just a single module
// different from constructor, we only need one.
// create once and keep calling it to get access to the methods
// usually encapsulates a service (database, etc)

var repo = function() {
  // can have access to private objects
  var db = {};

  // example of 'revealing' module pattern
  var get = function(id) {
    console.log("Getting task " + id);
    return {
      name: 'new task from db'
    }
  }

  // list of methods exposed by module
  return {
    get: get,
    save: function(task) {
      console.log("Saving task to db");
    }

  }
}
// can execute on export
// exposes the return object when requiring from another file
module.exports = repo();

// main.js
// import the example module
//var Repo = require('./taskrepository');
//console.log(Repo.get(1));
