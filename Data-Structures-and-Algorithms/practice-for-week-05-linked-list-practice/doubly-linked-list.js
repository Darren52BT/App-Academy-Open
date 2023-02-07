class DoublyLinkedListNode {
  constructor(val) {
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    // Your code here
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToHead(val) {
    // creates a new node
    let newNode = new DoublyLinkedListNode(val);
    //if there are no nodes yet, set the head/tail to be the newNode 
    if (this.length === 0) {
      this.tail = newNode;
      this.head = newNode;
    } else { //if there is already at least one node
      //sets the pointer of the new node to the current head
      newNode.next = this.head;
      //set previous pointer of current head to point to newNode
      this.head.prev = newNode;
      //set the new node to be the new head
      this.head = newNode;
    }

    this.length++;
  }

  addToTail(val) {
    // creates a new node
    let newNode = new DoublyLinkedListNode(val);
    //if there is just one node, set the head/tail to be the newNode 
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else { //if there is already at least one node
      //set the new node previous pointer to point to current tail, and vice versa
      newNode.prev = this.tail;
      this.tail.next = newNode;
      //set the tail to be the new node
      this.tail = newNode;
    }
    //increase length
    this.length++;

  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} <-> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = DoublyLinkedList;
