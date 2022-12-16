/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

// your code here
function flatten(array) {
  //base case of 0, return empty array
  if (array.length === 0) {
    return [];
  }
  //if first element is a nested array
  if (Array.isArray(array[0])) {
    //make recursive call with same array but first element destructured
    return flatten([...array[0], ...array.slice(1)]);
  } else { //if first element isn't a nested array, add it to result, make recursive call on array without first element and add destructured results
    return [array[0], ...flatten(array.slice(1))];
  }
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = flatten;
} catch (e) {
  module.exports = null;
}
