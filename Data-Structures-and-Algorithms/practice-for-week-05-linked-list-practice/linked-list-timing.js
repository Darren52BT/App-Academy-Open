const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/



/*

Singly Linked:
addToHead: O(1)
addToTail: O(n)

Doubly Linked:
addToHead: O(1)
addToTail: O(1)
*/


let start;
let end;
let list;

//-----------------------n = 1,000,000------------------------------

console.log("N =100,000")
console.log("------------addToHead-----------------")
list = new LinkedList();
start = Date.now();
for(let i = 0; i<99999; i++ ){
    list.addToHead(i)
}
list.addToHead(100000)
end = Date.now();
console.log(`Singly Linked List: ${end-start} ms`)
list = new DoublyLinkedList();
start = Date.now();
for(let i = 0; i<99999; i++ ){
    list.addToHead(i)
}
list.addToHead(100000)
end = Date.now();
console.log(`Doubly Linked List: ${end-start} ms`)
console.log("------------addToTail-----------------")
list = new LinkedList();
start = Date.now();
for(let i = 0; i<99999; i++ ){
    list.addToTail(i)
}
list.addToTail(100000)
end = Date.now();

console.log(`Singly Linked List: ${end-start} ms`)
list = new DoublyLinkedList();
start = Date.now();
for(let i = 0; i<99999; i++ ){
    list.addToTail(i)
}
list.addToTail(100000)
end = Date.now();
console.log(`Doubly Linked List: ${end-start} ms`)
