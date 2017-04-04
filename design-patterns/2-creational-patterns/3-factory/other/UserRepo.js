var userRepo = function() {
  var get = function(id) {
    console.log("Getting user " + id);
    return {
      name: 'new user from db'
    }
  }

  return {
    get: get,
    save: function(user) {
      console.log("Saving user to db");
    }

  }
}

module.exports = userRepo;
