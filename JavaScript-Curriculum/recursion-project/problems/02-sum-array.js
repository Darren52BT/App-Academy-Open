/***********************************************************************
Write a recursive function called `sumArray` that takes an array of integers
and returns the value of all the integers added together. Your array may
include a mix of positive and negative integers!

Examples:

sumArray([1, 2, 3]); //  6
sumArray([0, 1, -3]); //  -2
sumArray([1, 2, 3, 4, 5]); // 15
***********************************************************************/

// your code here
function sumArray(nums) {
  //base case
  if (nums.length === 0) {
    return 0;
  }
  //adds up first element with each call, makes another call with first element removed from array
  return nums[0] + sumArray((nums.slice(1)));
}
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumArray;
} catch (e) {
  module.exports = null;
}
