/***********************************************************************
Write a function called `subsets` that will return all subsets of an array.

Examples: 

subsets([]) // [[]]
subsets([1]) // [[], [1]]
subsets([1, 2]) // [[], [1], [2], [1, 2]]
subsets([1, 2, 3]) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

Hint: For subsets([1, 2, 3]), there are two kinds of subsets:
  1. Those that do not contain 3 (all of these are subsets of [1, 2]).
  2. For every subset that does not contain 3, there is also a corresponding
     subset that is the same, except it also does contain 3.
***********************************************************************/

// your code here
function subsets(arr, subset = [[]]) {
  //base case, if array is empty return subset
  if (arr.length === 0) {
    return subset;
  }
  //add first element of array to subset
  subset.push([arr[0]]);
  //save original length of subset before modification
  let length = subset.length;
  //loop through 1 element to last element before modification
  for (let i = 1; i < length - 1; i++) {
    //for each element of subset, copy the array and add the current new element to the copy
    // push copy to subset
    copy = [...subset[i], ...subset[length - 1]];
    subset.push(copy);
  }
  //take out the first element
  arr.shift();
  //recursive call with updated array and subset
  return subsets(arr, subset);
}
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = subsets;
} catch (e) {
  module.exports = null;
}
