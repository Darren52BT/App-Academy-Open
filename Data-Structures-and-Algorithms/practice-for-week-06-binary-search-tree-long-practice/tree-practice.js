

const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST(rootNode) {
  // Your code here

  //Keep looking to the left child until we hit the end, return current node's value
  let current = rootNode;

  if (current.left)
    return findMinBST(current.left);
  else
    return current.val;
}

function findMaxBST(rootNode) {
  // Your code here
  //keep looking to the right child until we hit the end, return current node's value
  let current = rootNode;

  if (current.right)
    return findMaxBST(current.right);
  else
    return current.val;
}

function findMinBT(rootNode) {
  // Your code here

  //start with the minimum as current node's value
  let min = rootNode.val;


  //if there is left child, make recursive call with left child
  //if result of that recursive call is lower than current min, update
  if (rootNode.left) {
    let left = findMinBT(rootNode.left);
    if (left < min)
      min = left;
  }

  //if there is right child, make recursive call with right child
  //if result of that recursive call is lower than current min, update
  if (rootNode.right) {
    let right = findMinBT(rootNode.right);
    if (right < min)
      min = right;
  }


  //otherwise, return the minimum as it is
  return min;

}

function findMaxBT(rootNode) {
  // Your code here

  //start with the maximum as current node's value

  let max = rootNode.val;

  //if there is left child, make recursive call with left child
  //if result of that recursive call is great than or equal to current max, update
  if (rootNode.left) {
    let left = findMaxBT(rootNode.left);
    if (left > max)
      max = left;
  }
  //if there is right child, make recursive call with right child
  //if result of that recursive call is greater than or equal to current max, update
  if (rootNode.right) {
    let right = findMaxBT(rootNode.right);
    if (right > max)
      max = right;
  }

  return max;
}

function getHeight(rootNode) {
  // Your code here
  let height = 0;
  let leftHeight = 0;
  let rightHeight = 0;

  //base case
  if (!rootNode)
    return -1;

  //if there is a child, then there is an edge
  if (rootNode.left || rootNode.right)
    height++;

  //recursive call to count the height of left child
  if (rootNode.left) {
    leftHeight = getHeight(rootNode.left);
  }
  //recursive call to count the height of right child
  if (rootNode.right) {
    rightHeight = getHeight(rootNode.right);
  }

  //check which is the larger sub tree height
  let biggerSubHeight = leftHeight;
  if (rightHeight > biggerSubHeight)
    biggerSubHeight = rightHeight;

  //add it to the height
  return height + biggerSubHeight;

}

function balancedTree(rootNode) {
  // Your code here

  //base case of reaching the end of path
  if (!rootNode)
    return true;

  //get height of left and right subtree
  let leftHeight = getHeight(rootNode.left);
  let rightHeight = getHeight(rootNode.right);


  //make recursive calls on the left and right child
  let leftResult = true;
  let rightResult = true;
  if (rootNode.left)
    leftResult = balancedTree(rootNode.left);
  if (rootNode.right)
    rightResult = balancedTree(rootNode.right);

  //return whether the heights of the two subtrees have at most a diff of 1
  // AND if that is the same for every node's subtrees
  return Math.abs(leftHeight - rightHeight) <= 1 && leftResult && rightResult;

}

function countNodes(rootNode) {
  // Your code here

  //base case
  if (!rootNode)
    return 0;

  //current node adds to the count
  let sum = 1;
  let leftSum = 0;
  let rightSum = 0;


  //make recursive calls on left and right subtrees
  if (rootNode.left)
    leftSum = countNodes(rootNode.left)
  if (rootNode.right)
    rightSum = countNodes(rootNode.right);

  //return current sum + the sums of the right and left subtrees
  return sum + leftSum + rightSum;
}

function getParentNode(rootNode, target) {
  // Your code here


  //if the current node doesn't have children and the current value doesn't have the target, return undefined
  if (!rootNode.left && !rootNode.right && rootNode.val !== target) {
    return;
  }

  //if there's a child with the target value, return the current node
  if ((rootNode.right && rootNode.right.val === target) || (rootNode.left && rootNode.left.val === target)) {
    return rootNode;
  }

  //make recursive calls to right and left children
  let rightResult;
  let leftResult;
  if (rootNode.right) {
    rightResult = getParentNode(rootNode.right, target);
  }

  if (rootNode.left) {
    leftResult = getParentNode(rootNode.left, target);
  }


  //if the current node has the target but the right and left subtree recursive calls return undefined,
  //then this node is the root
  if (rootNode.val === target && rightResult === undefined && leftResult === undefined) {
    return null;
  }

  //return results of recusrive calls to left/right subtrees,
  //if there is a parent node pointing to the target it will be returned,
  //otherwise undefined
  return rightResult || leftResult;


}

function inOrderPredecessor(rootNode, target) {
  // Your code here



  let stack = [];

  //start off with root node, prev as undefined
  let currentNode = rootNode;
  let prev;

  stack.push(currentNode)
  while (true) {

    //if the currentNode exists
    if (currentNode) {
      //push the currentNode to stack
      //set currentNode to left child
      stack.push(currentNode);
      currentNode = currentNode.left;

      //if current node doesn't exist and the stack isn't empty
    } else if (!currentNode && stack.length > 0) {
      //pop a node
      currentNode = stack.pop();

      //if it contains the target
      if (currentNode.val === target) {

        //if there isn't a previous node, this is the first node so return null
        if (!prev)
          return null;

        //otherwise, prev exists so return prev's value
        return prev.val;
      }

      //if the currentNode doesn't have a matching value
      //update prev and move on to the right child
      prev = currentNode;
      currentNode = currentNode.right;
    }

    //something would need to go pretty wrong for this to happen, 
    //like if we've started off with an empty tree 
    else {
      break;
    }
  }

}



function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent
  let parentNode = getParentNode(rootNode, target);
  // Undefined if the target cannot be found
  if(parentNode === undefined)
    return;


  // Set target based on parent
  let targetNode;
  if(!parentNode){
    targetNode = rootNode;
  } else{
    
    if(parentNode.left && parentNode.left.val === target){
      targetNode = parentNode.left;
    } else{
      targetNode = parentNode.right;
    }
  }
  // Case 0: Zero children and no parent:
  //   return null
  if (!parentNode && !targetNode.left && !targetNode.right) {
    return null;
  }
  // Case 1: Zero children:
  //   Set the parent that points to it to null
  if (targetNode && parentNode && !targetNode.left && !targetNode.right) {
    if (parentNode.left === targetNode) {
      parentNode.left = null;
    } else {
      parentNode.right = null;
    }
  }
  // Case 2: Two children:
  //  Set the value to its in-order predecessor, then delete the predecessor
  //  Replace target node with the left most child on its right side, 
  //  or the right most child on its left side.
  //  Then delete the child that it was replaced with.
  if (targetNode && targetNode.right && targetNode.left) {
    let inorder = inOrderPredecessor(rootNode, target);
    deleteNodeBST(rootNode, inorder.val);

    targetNode.val = inorder; 
    return;
  }

  // Case 3: One child:
  //   Make the parent point to the child
  if ((targetNode && !targetNode.left && targetNode.right)) {
    if (parentNode) {
      if (parentNode.left === targetNode) {
        parentNode.left = targetNode.right;
      } else {
        parentNode.right = targetNode.right;
      }
    }
  }else if (targetNode && !targetNode.right && targetNode.left) {
    if (parentNode) {
      if (parentNode.left === targetNode) {
        parentNode.left = targetNode.left;
      } else {
        parentNode.right = targetNode.left;
      }
    }
  }

}

module.exports = {
  findMinBST,
  findMaxBST,
  findMinBT,
  findMaxBT,
  getHeight,
  countNodes,
  balancedTree,
  getParentNode,
  inOrderPredecessor,
  deleteNodeBST
}
