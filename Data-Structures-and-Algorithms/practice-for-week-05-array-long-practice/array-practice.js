const findMinimum = arr => {

  //Time Complexity: O(n)
  //Space Complexity: O(1)
  //saves smallest number
  let smallest = arr[0];
  //iterates through array once to look for smallest
  for (let i = 1; i < arr.length; i++) {
    if (smallest > arr[i]) {
      smallest = arr[i]
    }
  }
  return smallest;
};

const runningSum = arr => {

  //Time Complexity= O(n)
  //Space Complexity = O(n)

  let arrSums = [0];
  //accumulates sums of previous elements for each index in O(n) time
  //by adding the previous sum of the last index with the next element of the arr
  for (let i = 0; i < arr.length - 1; i++) {
    arrSums.push(arrSums[i] + arr[i]);
  }

  let results = [];
  //adds the array elements with their corresponding previous sums in O(n) time 
  for (let i = 0; i < arr.length; i++) {
    results.push(arrSums[i] + arr[i])
  }
  return results;
};

const evenNumOfChars = arr => {

  //iterates through array and counts words that are even in length, returns number
  //Time Complexity: O(n)
  //Space Complexity: O(1)
  return arr.reduce((number, word) => {
    if (word.length % 2 === 0) {
      return number + 1;
    }
    return number;
  }, 0)
};

const smallerThanCurr = arr => {
  //object for storing numbers and the number of elements lower than them
  let numBucketIndexes = {}
  //for helping to assign order of numbers in buckets
  let numOrder = [];

  let numBuckets = 0;

  //iterates through arr, initializes number keys in object, no repeat
  for (let num of arr) {
    if (!numBucketIndexes.hasOwnProperty(num)) {
      numBucketIndexes[num] = 0;
      numOrder.push(num)
      numBuckets++;
    }
  }

  //sort unique numbers, time complexity O(nlogn), space complexity: O(n)
  numOrder.sort((a, b) => {
    return a - b;
  })

  //store indexes in sorted array
  for (let num in numOrder) {
    numBucketIndexes[numOrder[num]] = num;
  }

  let buckets = [];
  for (let i = 0; i < numBuckets; i++){
    buckets.push([])
  }
  //store equal numbers in same bucket, sorted
  for (let i = 0; i < arr.length; i++) {
 
    buckets[numBucketIndexes[arr[i]]].push(arr[i])
  }

  //overwrite buckets array to store sum of lengths of buckets before each bucket position
  //correlates to how many elements in array are lower than the current element
  let previousLength = buckets[0].length;
  buckets[0] = 0;
  for (let i = 1; i < buckets.length; i++) {
    let currentLength = buckets[i].length;
    buckets[i] = buckets[i-1] + previousLength;
    previousLength = currentLength;
  }
  
  
  let results  = [];
  //stores the number of elements smaller than the corresponding element for each index in the array
  for( let i = 0; i < arr.length; i++){
    results.push(buckets[numBucketIndexes[arr[i]]])
  }

  return results;

};


//time complexity O(n), space complexity: O(n)
const twoSum = (arr, target) => {

  //object for storing numbers and number of times they show up
  const numberOccurences = {};

  for (let num of arr){
    if (numberOccurences.hasOwnProperty(num)){
      numberOccurences[num]++;
    } else{
      numberOccurences[num] = 1;
    }
  }

//iterates though array, finds difference between target number and current number
//uses numberOccurences to see if there is another array element that matches difference, which makes function evaluate to true

for (let num of arr){
  //get difference
  let difference = target - num;
  //decrement corresponding occurence for current num to clarify that we are looking for another number in addition to it (in case there are more of the same number that could add up to target)
  numberOccurences[num]--;
  //see if number exists and that the number of occurences isnt 0
  if(numberOccurences.hasOwnProperty(difference) && numberOccurences[difference] !== 0){
    //if there is such a number, then there are 2 numbers in array that add up to target, so return true;
    return true;
  }
  //if there aren't any such numbers, then we are done looking at this current number
  //since we know there aren't any numbers that can add up with the current one to get the target, delete the corresponding number key
  delete numberOccurences[num]
}

//at this point, we have finished going through whole array and there were no matches found
return false;
};

// time complexity: O(n), space complexity: O(n)
const secondLargest = arr => {

//if array is just one element or empty, return undefined
if(arr.length === 1){
  return;
}

//iterate through array once to find largest
let largest = arr[0];
for(let num of arr){
  if(largest < num){
    largest = num;
  }
}

//get copy of array, delete all occurences of of largest number
let copy = []
for(let i = 0; i < arr.length; i++){
  if(arr[i] !== largest){
    copy.push(arr[i])
  }
}

//look for largest of copy, which will be the second largest of arr
let secondLargest = copy[0];
for(let i = 1; i < copy.length; i++){
  if(secondLargest < copy[i]){
    secondLargest = copy[i];
  }
}
//if array was just made up of one number, return that number
if(secondLargest === undefined){
  return largest;
}

//otherwise return secondLargest
return secondLargest;
};

//time complexity: O(n), space complexity: O(n)
const shuffle = (arr) => {

  //create copy of arr
  let shuffle = arr.slice();
 
  //for a number of iterations equal to array length
  for( let i = 0; i < shuffle.length; i++){
    //generate two random indexes, swap the two elements at those indexes
    let randomIndex = Math.floor(Math.random() * shuffle.length)
    let randomIndex2 = Math.floor(Math.random() * shuffle.length)
    let temp = shuffle[randomIndex];
    shuffle[randomIndex] = shuffle[randomIndex2];
    shuffle[randomIndex2] = temp;
  }
  
return shuffle;
};


module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];
