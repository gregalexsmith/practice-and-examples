var repoFactory = function() {
  var repos = this;
  var repoList = [
    {name:'task', source:'./other/TaskRepo'},
    {name:'user', source:'./other/UserRepo'},
    {name:'project', source:'./other/ProjectRepo'},
  ];
  repoList.forEach(function(repo) {
    repos[repo.name] = require(repo.source)()
  });
};

module.exports = new repoFactory;
