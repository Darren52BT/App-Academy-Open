// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        // Add node of val to head of linked list

        let newNode = new SinglyLinkedNode(val);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
        // Write your hypothesis on the time complexity of this method here
        //No iteration through the list is required, this is an O(1) operation
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here
        //Need to iterate through the list to find the last node in order to add the new tail, so this must be O(n) operation
        // Add node of val to tail of linked list
        let newNode = new SinglyLinkedNode(val);
        this.length++;
        if (!this.head) {
            this.head = newNode;
        } else {
            let curr = this.head;
            while (curr.next) {
                curr = curr.next;
            }
            curr.next = newNode;
        }
        return this;
    }

    removeFromHead() {
        // Remove node at head
        if (this.head) {
            this.length--;
            let node = this.head;
            this.head = this.head.next;
            return node;

        } 
            return undefined;
        
        // Write your hypothesis on the time complexity of this method here
        //No iteration of list required, must be O(1) operation
    }

    removeFromTail() {
        // Remove node at tail

        if(this.length===0){
            return undefined;
        }

        let node = this.head;

        if (this.length===1 ) {
            this.head = null;
            this.length--;
            return node;
        } else {
            while (node.next.next) {
                node = node.next;
            }
            let returnNode = node.next;
            node.next = null;
            this.length--;
            return returnNode;

        }
        // Write your hypothesis on the time complexity of this method here
        //If the list is not empty, then iteration of the list is required, which makes this an O(n) operation
    }

    peekAtHead() {
        // Return value of head node

        if(this.length===0){
            return;
        } 
        return this.head.value;
        // Write your hypothesis on the time complexity of this method here
        //No iteration of list required, simply looking at head pointer, must be O(1) operation
    }

    print() {
        // Print out the linked list
        let node = this.head;
        while (node) {
            console.log(node.value);
            node = node.next;
        }
        // Write your hypothesis on the time complexity of this method here
        //Requires iteration of list to print each node, must be O(n) operation
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
