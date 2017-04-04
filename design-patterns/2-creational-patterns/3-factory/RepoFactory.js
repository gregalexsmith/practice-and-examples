var repoFactory = function() {
  this.getRepo = function(repoType) {
    //returns a repo depending on the type asked
    switch (repoType) {
      case 'task':
        // get repo from cache if it has been loaded
        if (this.taskRepo) {
          return this.taskRepo
        } else {
          this.taskRepo = require('./other/TaskRepo')()
          // -- config task repo
          return this.taskRepo
        }
        break;
      case 'user':
        if (this.userRepo) {
          return this.userRepo
        } else {
          this.userRepo = require('./other/UserRepo')()
          // -- config user repo
          return this.userRepo
        }
        break;
    }
  }
}

module.exports = new repoFactory;
