

function selectionSort(arr) {

  // Copy the original array

  let unsorted = arr.slice();
  // Create an array to store the sorted values

  let sorted = [];
  // While the array is not empty...
  while (unsorted.length > 0) {
    // Do not move this console.log
    console.log(sorted.join(","));

    // Find the index of the minimum value in the unsorted half
    let smallest = unsorted[0];
    let smallIndex = unsorted.reduce((smallIndex, ele, index) => {
      if (ele < smallest) {
        smallest = ele;
        return index;
      }
      return smallIndex;
    }, 0);
    // Save and remove the value at the min index
    let temp = unsorted.splice(smallIndex, 1)[0];

    // Add the min value to the end of the sorted array
    sorted.push(temp);

  }
  return sorted;

}



function selectionSortInPlace(arr) {

  // Set a pointer at zero diving the array into sorted and unsorted halves

  let divide = 0;
  // Repeat while the unsorted half is not empty:
  while (divide < arr.length) {
    // Do not move this console.log
    console.log(arr.join(","));

    // Find the index of the minimum value in the unsorted half
    let smallest = arr[divide];
    let smallIndex = divide;
    for(let i = divide+1; i < arr.length; i++){
      if(arr[i] < smallest){
        smallest = arr[i];
        smallIndex = i;
      }
    }
    // Save the min value
    let temp = arr[smallIndex];
    // Shift every unsorted value to the left of the min value to the right by 1
    for(let i = smallIndex; i > divide; i--){
      arr[i] = arr[i-1];
    }
    
    // Put the min value at the divider
    arr[divide] = temp;
    // Increment the divider and repeat
    divide++;
  }

  return arr;
}


module.exports = [selectionSort, selectionSortInPlace];
