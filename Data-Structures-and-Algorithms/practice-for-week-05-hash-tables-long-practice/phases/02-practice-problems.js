function anagrams(str1, str2) {
  // Your code here



  //anagrams needs to be the same length
  if(str2.length !== str1.length){
    return false;
  }

  let set = new Set();

  //add unique characters of string1 to set
  for(let i = 0; i < str1.length; i++){
    set.add(str1[i]);
  }

  //look for characters in str2 that aren't in the set
  //if found, then the two strings are not anagrams
  for(let i = 0; i < str2.length; i++){
    if(!set.has(str2[i])){
      return false;
    }
  }

  //otherwise, they are anagrams
  return true;
}


function commonElements(arr1, arr2) {
  



  //iterate through arrays, add unique elements to unique set

  let set = new Set();
  arr1.forEach( ele =>{
    set.add(ele);
  })
  arr2.forEach( ele =>{
    set.add(ele);
  })


let results = [];
//iterate through set's values and add them to resulting array
for( let item of set.values()){
  results.push(item);
}
return results;


}


function duplicate(arr) {
  // Your code here

  let set = new Set();

  //iterate through array, add them to set
  //check if current element is already in set, if so, return that element


  for(let i = 0; i < arr.length; i++){
    if(set.has(arr[i])){
      return arr[i];
    }

    set.add(arr[i]);
  }
}


function twoSum(nums, target) {
  // Your code here

  //object to store the difference between the target and each element, paired with their corresponding element
  let obj = {};


  for(let i = 0; i < nums.length; i++){


    //if the current number is listed as a difference, then there are two numbers in the array that add up to the target
    if(obj.hasOwnProperty(nums[i])){
      return true;
    }
    //otherwise, add the difference between the target and the current number along with the current number itself to the object

    obj[target-nums[i]] = nums[i];
  }

  //otherwise, there are no numbers that add up to the target
  return false;
}


function wordPattern(pattern, strings) {


  //set to store word and corresponding pattern symbol
  let obj = {};
  let set = new Set();

  for(let i = 0; i < pattern.length; i++){
    // if the current object already as this string saved or the set already has this current pattern saved
    if(obj.hasOwnProperty(strings[i]) || set.has(pattern[i])){

      //first case of no match: the string is recorded in the object BUT the corresponding pattern symbol does not match what is already recorded
      //second case: the string has not been recorded yet BUT the pattern has already been recorded
      if(obj[strings[i]] !== pattern[i]){
        return false;
      }
      
    }
    //otherwise, add the string and corresponding pattern to the object, and record the pattern as a unique symbol    
    obj[strings[i]] = pattern[i];
    set.add(pattern[i])

  }

  //at this point, the word pattern is confirmed to match the target pattern
return true;
  
}


module.exports = [anagrams, commonElements, duplicate, twoSum, wordPattern];
