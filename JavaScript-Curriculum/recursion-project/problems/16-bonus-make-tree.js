/***********************************************************************
Write a recursive function `makeTree(categories, parent)` that takes an array of
categories objects, each of which have an id property, and a parent property and
returns a nested tree of those objects using the parent properties to construct
the tree.

A parent value of null means you are at the bottom of the tree and the category
has no parent, so the default value parent is be null if no parent is
provided.

Example 1:

Given an array of objects with id properties to create our tree:

const categories1 = [
    { id: 'animals', 'parent': null },
    { id: 'mammals', 'parent': 'animals' }
];

const tree1 = makeTree(categories1, null);

We should return a tree like this:

{
  animals: {
    mammals: {}
  }
}

Example 2:
Now imagine we have a database that returns a bunch of rows of data:

const categories2 = [
    { id: 'animals', 'parent': null },
    { id: 'mammals', 'parent': 'animals' },
    { id: 'cats', 'parent': 'mammals' },
    { id: 'dogs', 'parent': 'mammals' },
    { id: 'chihuahua', 'parent': 'dogs' },
    { id: 'labrador', 'parent': 'dogs' },
    { id: 'persian', 'parent': 'cats' },
    { id: 'siamese', 'parent': 'cats' }
];

Then we call the function with the categories:
const tree2 = makeTree(categories2, null);

The call above should return the tree below:

{
    animals: {
        mammals: {
            dogs: {
                chihuahua: {},
                labrador: {}
            },
            cats: {
                persian: {},
                siamese: {}
            }
        }
    }
}

***********************************************************************/

const makeTree = (categories, parent) => {
  // your code here
  //empty object to start with
  let obj = {};
  //iterate through categories
  for (row of categories) {
    //if the current row's parent matches the parent of the call
    if (row.parent === parent) {
      //make a new key with the row's id for the object
      //set the key's value to be an object containing the results of making a recursive call
      //with categories and the current row's id as the parent
      obj[row.id] = { ...makeTree(categories, row.id) };
    }
  }
 //base case is when there are no more children/ no children for the current parent, return the resulting object
  return obj;


};

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = makeTree;
} catch (e) {
  module.exports = null;
}

// This problem was inspired by a Fun Fun Function video:
// https://www.youtube.com/watch?v=k7-N8R0-KY4
