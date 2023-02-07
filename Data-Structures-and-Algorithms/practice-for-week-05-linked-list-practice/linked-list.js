class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    //initializes null head node and length of 0
    this.head = null;
    this.length = 0;
  }

  addToHead(val) {
    // creates a new node
    let newNode = new LinkedListNode(val);
    //sets the pointer of the new node to the current head
    newNode.next = this.head;
    //set the new node to be the new head, increment length
    this.head = newNode;
    this.length++;
  }

  addToTail(val) {
    // if the head is null, simply call the addToHead function
    if (this.head === null) {
      this.addToHead(val)
    }
    else { //if the head isn't null
      //iterate through the chain until we get a reference to the last node
      let currentNode = this.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      //link the last node to the new node, increase length
      currentNode.next = new LinkedListNode(val);
      this.length++;
    }
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = LinkedList;
