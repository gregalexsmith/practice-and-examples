/**
Singly Linked List
Data structure that contains a head, tail and length property
Consists of nodes, and each node has a value and a pointer to the next node or null
Compared to Arrays:
- no indexes 
- connected via nodes with next pointer
- random access is not allowed
- better for inserting items at the beggining and middle than arrays
*/

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// example
var first = new Node("hi");
first.next = new Node("how");
first.next.next = new Node("are");
first.next.next.next = new Node("you");


class SinglyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    /**
     * @function push - add an item to the end of the list
     * - if the list is empty, head and tail will be the same (new node)
     * - else set 'next' of the current tail to the new node, and update the tail reference to the new node
     * @param {*} val
     */
    push(val) {
        const node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    traverse() {
        var current = this.head;
        while(current) {
            console.log(current.val);
            current = current.next;
        }
    }

    // take the last item from the list
    pop() {
        if (!this.head) return;
        let current = this.head;
        let newTail = current;
        while(current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    // take the first item in the list
    shift() {
        if (!this.head) return;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if (this.length === 0) this.tail = null;
        return currentHead;
    }

    // add an item to the beginning of the list
    unshift(val) {
        var node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.tail = this.head;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.length++;
        return this;
    }

    // get the node at a given index
    get(index) {
        if (index < 0 || index >= this.length) return null;
        let counter = 0;
        let current = this.head;
        while (counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }
    
    // set the value of a node at a given index
    set(index, value) {
        var foundNode = this.get(index);
        if (foundNode) {
            foundNode.val = value;
            return true;
        }
        return false;
    }
    
    // insert a node at a given index
    insert(index, value) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) {
            this.push(value);
            return true;
        }
        if (index === 0) {
            this.unshift(value);
            return true;
        }
        var node = new Node(value);
        var previous = this.get(index-1);
        node.next = previous.next;
        previous.next = node;
        this.length++
        return true;
    }

    // remove a node at a given index
    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();
        var previousNode = this.get(index - 1);
        var removed = previousNode.next;
        previousNode.next = removed.next;
        this.length--;
        return removed;
    }

    print() {
        var arr = [];
        var current = this.head;
        while(current) {
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
        console.log(JSON.stringify(this, null, 2));
    }

    reverse() {
        var current = this.head;
        this.head = this.tail;
        this.tail = current;
        var next;
        var prev = null;

        while (current) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        return this;
    }
}

let list = new SinglyLinkedList();
// {
//   "length": 0,
//   "head": null,
//   "tail": null
// }

list.push("Hello")
// {
//   "length": 1,
//   "head": {
//     "val": "Hello",
//     "next": null
//   },
//   "tail": {
//     "val": "Hello",
//     "next": null
//   }
// }


list.push("Goodbye")
// {
//   "length": 2,
//   "head": {
//     "val": "Hello",
//     "next": {
//       "val": "Goodbye",
//       "next": null
//     }
//   },
//   "tail": {
//     "val": "Goodbye",
//     "next": null
//   }
// }

list.push("See ya")
// {
//   "length": 3,
//   "head": {
//     "val": "Hello",
//     "next": {
//       "val": "Goodbye",
//       "next": {
//         "val": "See ya",
//         "next": null
//       }
//     }
//   },
//   "tail": {
//     "val": "See ya",
//     "next": null
//   }
// }
list.shift()
// {
//   "length": 2,
//   "head": {
//     "val": "Goodbye",
//     "next": {
//       "val": "See ya",
//       "next": null
//     }
//   },
//   "tail": {
//     "val": "See ya",
//     "next": null
//   }
// }
list.unshift("unshift")
// {
//   "length": 3,
//   "head": {
//     "val": "unshift",
//     "next": {
//       "val": "Goodbye",
//       "next": {
//         "val": "See ya",
//         "next": null
//       }
//     }
//   },
//   "tail": {
//     "val": "See ya",
//     "next": null 
//   }
// }

var test = list.get(1);
// Node { val: 'Goodbye', next: Node { val: 'See ya', next: null } }
list.set(1, "Hello World")
var test = list.get(1);
// Node { val: 'Hello World', next: Node { val: 'See ya', next: null } }

list.set(0, 'zero')
list.set(1, 'one')
list.set(2, 'two')
// {
//   "length": 3,
//   "head": {
//     "val": "zero",
//     "next": {
//       "val": "one",
//       "next": {
//         "val": "two",
//         "next": null
//       }
//     }
//   },
//   "tail": {
//     "val": "two",
//     "next": null
//   }
// }
list.insert(2, 'insert');
// {
//   "length": 4,
//   "head": {
//     "val": "zero",
//     "next": {
//       "val": "one",
//       "next": {
//         "val": "insert",
//         "next": {
//           "val": "two",
//           "next": null
//         }
//       }
//     }
//   },
//   "tail": {
//     "val": "two",
//     "next": null
//   }
// }
list.remove(1);
// {
//   "length": 3,
//   "head": {
//     "val": "zero",
//     "next": {
//       "val": "insert",
//       "next": {
//         "val": "two",
//         "next": null
//       }
//     }
//   },
//   "tail": {
//     "val": "two",
//     "next": null
//   }
// }
list.print();
// [ 'zero', 'insert', 'two' ]
// {
//   "length": 3,
//   "head": {
//     "val": "zero",
//     "next": {
//       "val": "insert",
//       "next": {
//         "val": "two",
//         "next": null
//       }
//     }
//   },
//   "tail": {
//     "val": "two",
//     "next": null
//   }
// }
list.reverse();
list.print();
// [ 'two', 'insert', 'zero' ]
// {
//   "length": 3,
//   "head": {
//     "val": "two",
//     "next": {
//       "val": "insert",
//       "next": {
//         "val": "zero",
//         "next": null
//       }
//     }
//   },
//   "tail": {
//     "val": "zero",
//     "next": null
//   }
// }
