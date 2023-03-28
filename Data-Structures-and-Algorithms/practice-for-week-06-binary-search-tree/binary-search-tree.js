// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    // Your code here
    this.root = null;
  }

  insert(val, currentNode = this.root) {
    // Your code here
    //if tree is empty, make it the root
    if (this.root === null) {
      this.root = new TreeNode(val);
    } else { //otherwise

      //start with root
      let current = this.root;

      //while currentNode exists
      while (current !== null) {

        //if the new val is lower than current node's val and no left child exists, make it the left child
        if (val < current.val && current.left === null) {
          current.left = new TreeNode(val);
          return;
          //if new val is lower than current node's val but there is a left child, make the current node that left child and reevaluate
        } else if (val < current.val && current.left !== null) {
          current = current.left;
          //if the new val is greater than or equal to current node's val and no right child exists, make it the right child
        } else if (val >= current.val && current.right === null) {
          current.right = new TreeNode(val);
          return;
          //if new val is greater than or equal to current node's val but there is a right child, make the current node that right child and reevaluate

        } else {
          current = current.right;
        }
      }
    }
  }

  search(val) {
    // Your code here
    let currentNode = this.root;
    //search through tree
    while(currentNode !== null){
      //if the current node has a matching value return true
      if(currentNode.val === val){
        return true;
      } else{ //otherwise
        //if the currentNode does not have a matching value
        //see if the target value is less than OR greater the currentNode's value,
        //and move on to the left/right child accordingly
        if(val < currentNode.val){
          currentNode = currentNode.left;
        } else{
          currentNode = currentNode.right;
        }
      }
    }

    //we have finished looking through and haven't found the value
    return false;
  }


  preOrderTraversal(currentNode = this.root) {
    // Your code here
    if(currentNode === null){
      return;
    }
    console.log(currentNode.val);
    this.preOrderTraversal(currentNode.left);
    this.preOrderTraversal(currentNode.right);
  }


  inOrderTraversal(currentNode = this.root) {
    // Your code here
    if(currentNode === null){
      return;
    }
    this.inOrderTraversal(currentNode.left);    
    console.log(currentNode.val);

    this.inOrderTraversal(currentNode.right);
  }



  postOrderTraversal(currentNode = this.root) {
    // Your code here
    if(currentNode === null){
      return;
    }
    this.postOrderTraversal(currentNode.left);    
    this.postOrderTraversal(currentNode.right);    
    console.log(currentNode.val);

  }

  // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // your code here
    let queue = [];
    queue.push(this.root);

    while( queue.length > 0){
      let next = queue.shift();
      if(next!== null){
      console.log(next.val);
      if(next.left)      
        queue.push(next.left);        
      if(next.right)
         queue.push(next.right);
      }
     
    }

  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // your code here

    let stack = [];

    stack.push(this.root);

    while(stack.length >0){
      let next = stack.pop();
      if(next)
        console.log(next.val);
      if(next.left)
        stack.push(next.left);
      if(next.right)
        stack.push(next.right);
      
    }
  }
}

module.exports = { BinarySearchTree, TreeNode };
