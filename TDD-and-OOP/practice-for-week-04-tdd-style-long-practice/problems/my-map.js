function myMap(inputArray, callback) {
  // Your code here
  let copy = inputArray.slice();
  let arr = [];
  for(let i = 0; i < copy.length; i++){
    arr.push(callback(copy[i], i, copy));
  }
  return arr;
}

module.exports = myMap;
