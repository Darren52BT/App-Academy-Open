// Merge Sort out-of-place
// Do not modify the original array
// function mergeSort(arr) {

// // Check if the input is length 1 or less
// // If so, it's already sorted: return

// if (arr.length <= 1) {
//   return arr;
// }
// // Divide the array in half

// let firstHalf = arr.slice(0, arr.length / 2);
// let secondHalf = arr.slice(arr.length / 2);
// // Recursively sort the left half
// // Recursively sort the right half

// firstHalf = mergeSort(firstHalf);
// secondHalf = mergeSort(secondHalf);
// // Merge the halves together and return
// return merge(firstHalf, secondHalf)


// 


//Merge Sort in-place
//stores the halved arrays inside the original array, so there should be still the same number of elements in total being stored

function mergeSort(arr) {

  // // Check if the input is length 1 or less
  // // If so, it's already sorted: return
  if (arr.length <= 1) {
    return arr;
  }

  //divide array in half
  let half = Math.floor(arr.length / 2);

  //make the original arr turn into two nested half-arrays;
  arr = [arr.slice(0, half), arr.slice(half)];
  //call merge on each half
  arr = [mergeSort(arr[0]), mergeSort(arr[1])];

  //now merge each half
  arr = [...merge(arr[0], arr[1])];

  return arr;
}

// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {

  //if arrA is not an array but arrB is, convert arrA into array
  if (arrA.length === undefined && arrB.length) {
   arrA = [arrA]

  }
  //do the same for arrB
  else if (arrB.length === undefined && arrA.length) {
    arrB = [arrB];
  }
  //do the same for both if both are not arrays
  else if (arrA.length === undefined && arrB.length === undefined) {
    arrA = [arrA];
    arrB = [arrB];
  }

  
  // Create an empty return array

  let returnArr = [];
  // Point to the first value of each array

  let pointerA = 0;
  let pointerB = 0;
  // While there are still values in each array...
  while (pointerA < arrA.length || pointerB < arrB.length) {
    // Compare the first values of each array
    let aElem = arrA[pointerA];
    let bElem = arrB[pointerB];
    // Add the smaller value to the return array   
    // Move the pointer to the next value in that array


    if (aElem < bElem || pointerB >= arrB.length) {

      returnArr.push(aElem);
      pointerA++;
    }
    else {
      returnArr.push(bElem);
      pointerB++;
    }
  }


  // Return the return array
  return returnArr;
}

module.exports = [merge, mergeSort];
