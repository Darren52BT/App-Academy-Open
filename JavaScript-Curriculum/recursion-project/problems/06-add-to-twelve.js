/***********************************************************************
Write a recursive function called `addToTwelve` that will return true if there
are two adjacent numbers in the input array that can sum up to 12. Otherwise,
return false.

Examples:

addToTwelve([1, 3, 4, 7, 5]); // true
addToTwelve([1, 3, 4, 7, 6]); // false
addToTwelve([1, 11, 4, 7, 6]); // true
addToTwelve([1, 12, 4, 7, 6]); // false
addToTwelve([1]); // false
***********************************************************************/

// your code here
function addToTwelve(nums) {
  //if array length is smaller than 2, return false, base case
  if (nums.length < 2) {
    return false;
  }
  //add together first two elements of array to see if add up to twelve, make recursive calls with first element removed
  //set up logical OR operations to see if one returns true
  return (nums[0] + nums[1] === 12) || addToTwelve(nums.slice(1));
}
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = addToTwelve;
} catch (e) {
  module.exports = null;
}
