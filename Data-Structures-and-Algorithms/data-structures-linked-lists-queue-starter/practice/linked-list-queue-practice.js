// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(head = null) {
        this.head = head;
        this.length = 0;
    }

    addToTail(val) {
        let newNode = new SinglyLinkedNode(val);
        this.length++;
        if (!this.head) {
            this.head = newNode;
            return this.head;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;
        return this.head;
    }

    listLength() {
        // Returns the length of the list
        // Implement in O(n) and in O(1) time complexity

        /*
        Pros: less code, more readability
        Cons: inefficient for large list lengths
        let count = 0;
        let node = this.head;
        while(node){
            count++;
            node = node.next;
        }
        return count;
        */

        //add this.length to list
        //Pros: time efficient
        //Cons: more memory, more code to read and maintain
        return this.length;


    }

    sumOfNodes() {
        // Returns the sum of the values of all the nodes

        let node = this.head;
        let sum = 0;
        while (node) {
            sum += node.value;
            node = node.next;
        }
        return sum;
        // Write your hypothesis on the time complexity of this method here
        /*
        Iterates through list to add up values, must be O(n)
        */
    }

    averageValue() {
        // Returns the average value of all the nodes
        if (this.listLength() === 0) {
            return 0;
        }
        return this.sumOfNodes() / this.listLength();
        // Write your hypothesis on the time complexity of this method here
        /*
        This takes O(n) either way. Even if listLength is O(1), sumOfNodes still takes O(N), which makes this method O(n)
        */
    }

    findNthNode(n) {
        // Returns the node at the nth index from the head

        if (n < 0 || n >= this.listLength()) {
            return null;
        }

        let count = 0;
        let node = this.head;
        while (count !== n) {
            count++;
            node = node.next;
        }
        return node;
        // Write your hypothesis on the time complexity of this method here
        /*In the worst case, the node is at the end of the list, making the search O(n) */
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
        // How do the implementation for singly and doubly vary if at all?
        //The implementation would not vary. Both lists would have a length property.
        //I would get the middle number in that range, and iterate through the list until i get the corresponding node
        // Write your hypothesis on the time complexity of this method here
        // With n = length of list, finding the middle would always take n/2 iterations, which results in a Big O of N;

        if (this.length === 0) {
            return null;
        }
        let mid = Math.floor(this.length / 2);
        if (this.length % 2 === 0) {
            mid--;
        }
        let count = 0;
        let node = this.head;
        while (count !== mid) {
            count++;
            node = node.next;
        }
        return node;

    }

    reverse() {
        // Returns a new reversed version of the linked list

        let newList = new SinglyLinkedList();
        let node = this.head;
        newList.addToTail(node.value);
        while (node.next) {
            node = node.next;
            let nodeCopy = new SinglyLinkedNode(node.value);
            nodeCopy.next = newList.head;
            newList.head = nodeCopy;
        }
        return newList;
        // Write your hypothesis on the time complexity of this method here
        //O(n), iterates through list
    }

    reverseInPlace() {
        // Reverses the linked list in-place

        //find tail, make it first of reversed list
        let first = this.head;
        while (first.next) {
            first = first.next;
        }

        // this is the variable for storing the previous node that was added to the reversed order starting from the end;
        let lastReverse = this.head;

        let copy;

    
        //iterate through normal list starting from second node        
        let current = this.head.next;

        //while current node exists and isn't the tail of the normal order
        while (current && current !== first) {
            //save the next node in the normal order
            copy = current.next;
            //set current node to first of reversed list
            first.next = current;
            //set the next of current node to the lastReverse node
            current.next = lastReverse;
            //update the lastReverse to be the current node, so that we can insert the next node similarly
            lastReverse = current;
            //update the current node to be the next node in the current order
            current = copy;
        }
        //now the list is circularly linked, so the previous head of the normal order, which is now the tail, must have its next to be set null
        this.head.next = null;   
        //update head to the reversed list     
        this.head = first;       

        // Write your hypothesis on the time complexity of this method here
        //O(n), iterates through list
    }
}

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

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);

        this.length++;
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this.head;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;

        return this.head;
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
        // How do the implementation for singly and doubly vary if at all?
        //The implementation would not vary. Both lists would have a length property.
        //I would get the middle number in that range, and iterate through the list until i get the corresponding node
        // Write your hypothesis on the time complexity of this method here
        // With n = length of list, finding the middle would always take n/2 iterations, which results in a Big O of N;

        if (this.length === 0) {
            return null;
        }
        let mid = Math.floor(this.length / 2);
        if (this.length % 2 === 0) {
            mid--;
        }
        let count = 0;
        let node = this.head;
        while (count !== mid) {
            count++;
            node = node.next;
        }
        return node;

    }

    reverse() {
        // Returns a new reversed version of the linked list

        //make new list to store reversed order
       let reversed = new DoublyLinkedList();

       //start iterating through list backwards from tail, sotp when current node is null
       let node = this.tail;
       while (node){
        //add the current node to the reversed list's tail
        reversed.addToTail(node.value);
        //move to the node's previous node
        node = node.prev;
       }

       return reversed;

        // Write your hypothesis on the time complexity of this method here
        //This iterates from the tail to the head to reverse, takes O(n)

    }

    reverseInPlace() {
        // Reverses the linked list in-place

        //first of reversed list, which is tail
        let node = this.tail;
        //holds the previous node, which will be set to the head for now so we have a stopping point since this is turning into a circular list for now
        let prevNode = this.head;
        //start iterating through the list backwards from the tail, stops when the node is the head
        while(node !== this.head){
            //copy the current node
            let copy = node;
            //set the current node's next to be its previous node
            node.next = node.prev;
            //update the current node to become its previous node
            node = node.prev;
            //get the current node from before and set its prev to prevNode
            copy.prev = prevNode;
            //set prevNode to the current node from before
            prevNode = copy;
        }
        //at this point the loop has stopped and the current node is pointing at the head of of the list in normal order
        this.head.next = null;
        //switch the head and tails to reflect the reversed list order
        let prevHead = this.head;
        this.head = this.tail;
        this.tail = prevHead;
    
        // Write your hypothesis on the time complexity of this method here
        //This iterates from the tail to the head to reverse, takes O(n)
    }
}

module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}
