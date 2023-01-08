module.exports = function reverseString(string) {
  // Your code here
if(typeof string !=='string'){
  throw TypeError("input needs to be a string");
}
  //turns string into array, reverses array, turns reversed result back into string
  return string.split("").reverse().join("");
};
