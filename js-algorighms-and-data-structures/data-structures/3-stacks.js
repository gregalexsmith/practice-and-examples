/**
Stacks
- a collection of data that organizes data access in a last in, first out method
- manage function invocations, undo/redo, routing(history)

O(1) for insertion and removal 
*/

// can use the build in array to represent a stack if we just use push and pop
// or shift and unshift (less efficient)
// this is also less efficient as we shouldn't have the need to access random items by index
var stack = [];
stack.push("google");
stack.push("instagram");
stack.push("youtube");
// [ 'google', 'instagram', 'youtube' ]
stack.pop(); // youtube
stack.pop(); // instagram
stack.pop(); // google

// A more efficient approach would be to build a stack similar to a linked list
// we don't need access to items in the middle, just the top of the stack
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    push(val) {
        var node = new Node(val);
        if (!this.first) {
            this.first = node;
            this.last = node;
        } else {
            var temp = this.first;
            this.first = node;
            this.first.next = temp;
        }
        return ++this.length;
    }

    pop() {
        if (!this.first) return null;
        var temp = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.length--;
        return temp.value;
    }
}

var stack = new Stack();
console.log(stack.push('first')) 
// 1
console.log(stack.push('second'))
// 2
console.log(stack.push('third'))
// 3
console.log(stack.pop());
// third
console.log(stack.pop());
// second
console.log(stack.pop());
// first

