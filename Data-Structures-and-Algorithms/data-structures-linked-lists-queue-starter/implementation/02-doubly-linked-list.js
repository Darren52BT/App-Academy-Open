// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
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

    addToHead(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here
        //No iteration of list needed, just use pointer to add to head, must be O(1) operation

        // Add node of val to head of linked list
        let newNode = new DoublyLinkedNode(val);

        if (this.length > 0) {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        } else {
            this.head = newNode; 
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    addToTail(val) {
        // Add node of val to tail of linked list

        let newNode = new DoublyLinkedNode(val);

        if(this.length > 0){
            this.tail.next = newNode;
            newNode.prev = this.tail;

            this.tail = newNode;
        } else{
            this.head =  newNode;
            this.tail = newNode;
        }
        this.length++;

        return this;
        // Write your hypothesis on the time complexity of this method here
        //No need to iterate through list to find tail, just use pointer to add to tail, must be O(1)
    }

    removeFromHead() {
        // Remove node at head

        let node = this.head;


        if(this.length>0){
            this.head = this.head.next;
            if(this.length>1){
                this.head.prev = null;
            } else{
                this.tail = null;
            }
            this.length--;
            return node.value;
        }  

        return;
        // Write your hypothesis on the time complexity of this method here
        //No need to iterate through list, just use head pointer to remove head, must be O(1)
    }

    removeFromTail() {
        // Remove node at tail
        let node = this.tail;
        if(this.length>0){
            this.tail = this.tail.prev;
            if(this.length > 1){
                this.tail.next = null;
            } else{
                this.head = null;
            }
            this.length--;
            return node.value;
        }
        return;

        // Write your hypothesis on the time complexity of this method here
        //No need to iterate through list, just use tail pointer, must be O(1)
    }

    peekAtHead() {
        // Return value of head node

        if(this.length>0){
            return this.head.value;
        }
        return;
        // Write your hypothesis on the time complexity of this method here
        //just use pointer, should be O(1)
    }

    peekAtTail() {
        // Return value of tail node
        if(this.length>0){
            return this.tail.value;
        }
        return;
        // Write your hypothesis on the time complexity of this method here
        //just use pointer, should be O(1)
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
