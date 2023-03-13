// Insertion Sort out-of-place
// Do not modify the original array
function insertionSort(arr) {
  /*
  Pseudocode:

  Copy the original array
  Create an array to store the sorted values
  While the array is not empty:
  - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
  - Pop a value from the array
  - Create a new spot at the end of the array with null to help with comparisons
  - Walk through the sorted array in reverse order
  - Check if the value to the left is smaller than the new value
  - If so, you've reached the insertion point so exit the loop
  - If not shift the value to the right by 1 and continue
  - Insert the unsorted value at the break point
  Return the sorted array
  */

  // Your code here



  let unsorted = arr.slice();
  let sorted = [];

  while(unsorted.length > 0){
    console.log(sorted.join(','))

    let popped = unsorted.pop();

    sorted.push(null);

    let i = sorted.length-2;

    //start from end of array, shift larger values to the right
    while(i >= 0 && sorted[i] > popped){
      sorted[i+1] = sorted[i];
      i--;

    }

    //i will either stop when it reaches a smaller value or it has reached the beginning of the array
    //insert it at the space created by shifting the other values
    sorted[i+1]  = popped;      

  }

  return sorted;

}

// In-place Insertion Sort
// Mutates the original array
function insertionSortInPlace(arr) {
  /*
  Pseudocode:

  Set a pointer dividing the array into sorted and unsorted halves
  Repeat while the unsorted half is not empty:
  - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
  - Grab the first value from the unsorted half
  - For each value starting from the divider,
  - Check if the value to the left is smaller than the unsorted value
  - If so, you've reached the insertion point so exit the loop
  - If not shift the value to the right by 1 and continue
  - Insert the unsorted value at the break point
  - Increment the dividing pointer and repeat
  Return the mutated array
  */

  // Your code here



//divider separated array into sorted(left) and unsorted(right)
  let divider = 0;


  //continue until divider reaches end of array, meaning array is sorted
  while(divider !== arr.length){
    //grab the first unsorted element at the divider
    let temp = arr[divider];

    //shift all elements in the sorted half (starting from the end of the sorted half) that are larger than the temp to the right until we reach the beginning of the half or a smaller value
    let i = divider-1;
    while(i >= 0 && arr[i] > temp){
      arr[i +1] = arr[i];
      i--;
    }

    //insert temp at the space created by shifting all the larger elements to the right or by reaching the beginning
    arr[i +1 ] = temp;

    //increment the divider to move on to the next unsorted element
    divider++;   


     console.log(arr.join(','))
  }


  return arr;
}

module.exports = [insertionSort, insertionSortInPlace];
