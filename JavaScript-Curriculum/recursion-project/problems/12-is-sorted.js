/***********************************************************************
Write a recursive solution called `isSorted` to determine if the input array
is sorted in ascending order.

Examples:

isSorted([1, 2, 3, 4, 5]); // true
isSorted([1, 2, 4, 3, 5]); // false
isSorted([2, 4, 6, 7, 8]); // true
isSorted([5, 4, 3, 2, 1]); // false
***********************************************************************/

// your code here
function isSorted(nums) {
  //base case, if array has less than 2 elements, return true
  if (nums.length <= 1) {
    return true;
  }
  //compare 1st to 2nd element to see if increasing
  //make recursive call with array without 1st element, connect results with logical &&
  //if one of the calls results in false, then the whole array is not increasing
  return (nums[0] < nums[1]) && isSorted(nums.slice(1));
}
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = isSorted;
} catch (e) {
  module.exports = null;
}
