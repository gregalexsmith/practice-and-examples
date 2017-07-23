// Node - represents a single node in the tree
function Node(val) {
  this.value = val;
  this.left = null;
  this.right = null;
}

// add another node relative to current location
Node.prototype.addNode = function(n) {
  if (n.value < this.value) {
    if (this.left == null) {
      this.left = n;
    } else {
      this.left.addNode(n);
    }
  } else if (n.value > this.value){
    if (this.right == null) {
      this.right = n;
    } else {
      this.right.addNode(n);
    }
  }
}

// visit - used for printing out values in the tree
Node.prototype.visit = function() {
  if (this.left != null) {
    this.left.visit();
  }
  console.log(this.value);
  if (this.right != null) {
    this.right.visit();
  }
}

// searches for a match of the given value
Node.prototype.search = function(val) {
  if (this.value == val) {
    return this;
  } else if (val < this.value && this.left != null) {
    return this.left.search(val);
  } else if (val > this.value && this.right != null) {
    return this.right.search(val);
  }
  return null;
}

module.exports = Node;
