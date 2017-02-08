// given a directory path and extension name
// print out all files in directory that match the extension
// Must do this using an external module that returns the correct list of files

var filterByExt = require('./6-module.js');

var directory = process.argv[2];
var extension = process.argv[3];

filterByExt(directory, extension, function(err, list) {
  if (err) {
    return console.err("Error", err)
  }
  //success, print the filtered list to the console
  for (var i = 0; i < list.length; i++) {
    console.log(list[i]);
  }
})
