/**
Doubly Linked List
- almost identical to singly linked list
- except each node as an additional pointer to the previous node 
- takes up more memory

better than singly linked list:
Removal: O(1)
searching / access: O(N/2) -> but this simplifies to O(N)
 */

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    print() {
        var arr = [];
        var current = this.head;
        while(current) {
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
    }

    push(val) {
        const node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return undefined;
        var node = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = node.prev;
            this.tail.next = null;
            node.prev = null;  
        }
        this.length--;
        return node;
    }

    shift() {
        if (!this.head) return undefined;
        const node = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = node.next;
            this.head.prev = null;
            node.next = null;
        }
        this.length--;
        return node;
    }

    unshift(val) {
        const node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index <= this.length / 2) {
            let count = 0;
            let current = this.head;
            while(count != index) {
                current = current.next;
                count++;
            }
            return current;
        } else {
            let count = this.length -1;
            let current = this.tail;
            while(count != index) {
                current = current.next;
                count--;
            }
            return current;
        }
    }

    set(index, val) {
        var node = this.get(index);
        if (node) {
            node.val = val;
            return true;
        }
        return false;
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return !!this.unshift(val);
        if (index === this.length) return !!this.push(val);
        const newNode = new Node(val);
        const beforeNode = this.get(index - 1);
        const afterNode = beforeNode.next;
        beforeNode.next = newNode;
        newNode.prev = beforeNode;
        newNode.next = afterNode;
        afterNode.prev = newNode;
        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();
        const node = this.get(index);
        node.prev.next = node.next;
        node.next.prev = node.prev;
        node.next = null;
        node.prev = null;
        this.length--;
        return node;
    }

    reverse(){
        var current = this.tail;
        this.tail = this.head;
        this.head = current;
        var next;
        var prev = null;
        while (current) {
            prev = current.prev;
            next = current.next;
            current.next = prev;
            current.prev = next;
            current = prev;
        }
        return this;
    }
}

const list = new DoublyLinkedList();

list.push("one");
list.push("two");
list.push("three");
list.print();
// [ 'one', 'two', 'three' ]
// DoublyLinkedList {
//     head:
//      Node {
//        val: 'one',
//        next: Node { val: 'two', next: [Object], prev: [Circular] },
//        prev: null },
//     tail:
//      Node {
//        val: 'three',
//        next: null,
//        prev: Node { val: 'two', next: [Circular], prev: [Object] } },
//     length: 3 }
console.log(list.pop());
// Node { val: 'three', next: null, prev: null }
// [ 'one', 'two' ]
console.log(list.shift());
// Node { val: 'one', next: null, prev: null }
// [ 'two' ]
console.log(list.shift());
// Node { val: 'two', next: null, prev: null }
// []
console.log(list.shift());
// undefined
// []
list.push("one");
list.unshift("before");
list.unshift("hey")
// [ 'hey', 'before', 'one' ]
console.log(list.get(2).val)
list.set(2, "set");
console.log(list.get(2).val)

console.log(list.insert(-1, "invalid")) 
//false
console.log(list.insert(3, "valid")) 
//false
// ['hey', 'before', 'set', 'valid' ]
console.log(list.insert(3, "insert")) 
//false
// [ 'hey', 'before', 'set', 'insert', 'valid' ]
list.remove(2);
// [ 'hey', 'before', 'insert', 'valid' ]
list.reverse();
// [ 'valid', 'insert', 'before', 'hey' ]