var Tree = require('./Tree')
var tree = new Tree();

// Add random values to tree
for (var i = 0; i < 10; i++) {
  tree.addValue(Math.floor(Math.random() * 100 + 1));
}

// print out tree
tree.traverse();

// try to find a fixed value
var found = tree.search(20)
if (found != null) {
  console.log("found", found);
} else {
  console.log("not found");
}
