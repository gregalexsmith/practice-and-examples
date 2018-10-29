/**
Queues 
Similar to stacks where we only need to add and remove data
- Uses first in, first out
- background tasks, uploading, printing queues, etc

O(1) for insertion and removal
*/

// concept of a queue using an array 
// use push -> shift
// or unshift -> pop
// both of these are not the most efficient, as the array has to re-index for shift & unshift
var q = [];
q.push("first");
q.push("second");
q.push("third");
q.shift(); // first
q.shift(); // second
q.shift(); // third

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Add to the end, and remove from the beginning
class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val) {
        var node = new Node(val);
        if (!this.first) {
            this.first = node;
            this.last = node;
        } else {
            this.last.next = node;
            this.last = node;
        }
        return ++this.size;
    }

    dequeue() {
        if (!this.first) return null;
        var temp = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}

var queue = new Queue();
queue.enqueue('first');
queue.enqueue('second');
queue.enqueue('third');
queue.dequeue(); // first
queue.dequeue(); // second
queue.dequeue(); // third
