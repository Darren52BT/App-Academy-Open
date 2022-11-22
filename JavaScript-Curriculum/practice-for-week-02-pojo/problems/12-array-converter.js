/***********************************************************************
Write a function `arrayConverter(array)` that will intake an
array as an argument and returns an object representing the count of each
value in the array. **Hint:** don't forget you can check if a key is present
in an object by using `obj[key] === undefined`.

Examples:

console.log(arrayConverter(["apple", "apple"])); // => {apple: 2}
console.log(arrayConverter(["mango", "pineapple"])); // => {mango: 1, pineapple: 1}
console.log(arrayConverter(["apple", "banana", "potato", "banana"])); // => {apple: 1, banana: 2, potato: 1}
***********************************************************************/

function arrayConverter(array) {
  // Your code here
  let obj = {}
  //loops through indexes in array
  for (let ele in array) {
    //if the object doesn't have the current property
    if (!obj.hasOwnProperty(array[ele])) {
      //add it to button and add value of one
      obj[array[ele]] = 1;
      //if it does have it, increment the corresponding value
    } else {
      obj[array[ele]]++;
    }
  }
  return obj;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = arrayConverter;
