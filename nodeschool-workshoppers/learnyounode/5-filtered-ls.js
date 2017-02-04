// given a directory path and extension name
// print out all files in directory that match the extension

var fs = require('fs');
var path = require('path');

var folderPath = process.argv[2];
var extension = "." + process.argv[3];

//read directory and print list of matched files
fs.readdir(folderPath, function(err, files) {
  if (err) {
    return console.error(err);
  }
  files.forEach(function(file) {
    if (path.extname(file) === extension) {
      console.log(file);
    }
  })
});
