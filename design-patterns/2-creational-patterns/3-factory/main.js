// Factory Pattern
//  - simplifies object creation
//  - creating different objects based on need

// Example: Repository Creation
//  - might have different types of repositories, will vary depending on need

// Ex 1: make a simple factory with optional caching
// can load a different repo each time with the same API
// caching allows minimal re-loading

var Task = require('./other/Task');
var repoFactory = require('./RepoFactory')

var task = new Task(repoFactory.getRepo('task').get(1));
var user = repoFactory.getRepo('user').get(1);

console.log(task);
console.log(user);
