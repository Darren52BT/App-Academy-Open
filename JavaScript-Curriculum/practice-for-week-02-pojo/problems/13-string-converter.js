/***********************************************************************
Write a function `stringConverter(string)` that will intake a
string as an argument and returns an object representing the count of each
character in the string. **Hint:** don't forget you can check if a key is present
in an object by using `obj[key] === undefined`.

Examples:

console.log(stringConverter("apple")); // => {a: 1, p: 2, l: 1, e: 1}
console.log(stringConverter("banana")); // => {b: 1, a: 3, n: 2}
console.log(stringConverter("raccoon")); // => {r: 1, a: 1, c: 2, o: 2, n: 1}
***********************************************************************/

function stringConverter(string) {
  // Your code here
  let obj = {};
  //loop through indices in strings
  for (let char in string) {
    //if the obj doesn't have the char
    if (!obj.hasOwnProperty(string[char])) {
      //add it to obj and give it value of 1
      obj[string[char]] = 1;
    } else {
      //if obj has the char already, increment corresponding value
      obj[string[char]]++;
    }
  }
  return obj;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = stringConverter;
