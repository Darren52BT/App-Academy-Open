/***********************************************************************
Write a recursive method permutations(array) that calculates all the
permutations of the given array. For an array of length n there are n! different
permutations. So for an array with three elements we will have 3 * 2 * 1 = 6
different permutations.

Examples:

permutations([1, 2]) // [[1, 2], [2, 1]]
permutations([1, 2, 3]) // [[1, 2, 3], [1, 3, 2],
                        // [2, 1, 3], [2, 3, 1],
                        // [3, 1, 2], [3, 2, 1]]
***********************************************************************/

// your code here
function permutations(array, permute = [], result = []) {
  //if there is nothing left to be added to the current permutation,
  //push it to the result
  if (array.length === 0) {
    result.push([...permute]);
  }
  for (i in array) {
    //get copy of array
    let copy = array.slice();
    //remove the next element to be added to permute and push it to permute
    let removed = copy.splice(i, 1);
    permute.push(...removed);
    //make a recursive call with updated copy of array, updated permute, and updated result
    permutations(copy, permute, result);
    //undo what we added to the permute so we can swap it with the other elements
    permute.pop();
  }
  return result;

}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = permutations;
} catch (e) {
  module.exports = null;
}
