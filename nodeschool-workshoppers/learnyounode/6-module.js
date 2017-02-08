// Exports a single function that return a list of files in directory that match a given extension

var fs = require('fs');
var path = require('path');

module.exports = function(directory, extension, callback) {
  fs.readdir(directory, function(err, list) {
    if (err) {
      return callback(err);
    }
    //filter down the list of files
    list = list.filter(function(fileName) {
      return path.extname(fileName) === "." + extension;
    });
    //callback must be called with null as first arg (no error)
    callback(null, list)
  })
}
