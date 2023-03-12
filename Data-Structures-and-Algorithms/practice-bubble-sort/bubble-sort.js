
function bubbleSort(arr) {



  let numSwaps = 0;
  // Iterate through the array
  for (let i = 0; i < arr.length - 1; i++) {

    // If the current value is greater than its neighbor to the right
    // Swap those values
    if (arr[i] > arr[i + 1]) {
      //increment current number of swaps
      numSwaps++;
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      // Do not move this console.log
      console.log(arr.join(","));
    }
  }

  //base case
  // If you get to the end of the array and no swaps have occurred, return
  if (numSwaps === 0) {
    return arr;
  }  
  // Otherwise, repeat from the beginning
  //otherwise, make a recursive call with the current changed array
  return bubbleSort(arr);



}

module.exports = bubbleSort;
