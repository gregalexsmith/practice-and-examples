// Ex 2: - using alternate method
// this allows the factory api to be cleaned up a bit
var Task = require('./other/Task');
var repos = require('./RepoFactory2')

var task1 = new Task(repos.task.get(1));
var user = repos.user.get(1);
var project = repos.project.get(1);
