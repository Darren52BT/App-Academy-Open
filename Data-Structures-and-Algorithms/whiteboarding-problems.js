/*
logBetween
Define a function logBetween(lowNum, highNum) that will return an array from lowNum to highNum, inclusive. 
Inclusive means that the range includes lowNum and highNum.


Examples:

logBetween(-1, 2);  // => [-1, 0, 1, 2]
logBetween(14, 6);  // => []
logBetween(4, 6);  // => [4, 5, 6] */

/*
With n being the length of the range of numbers, this solution has a time complexity of O(n), and a space complexity of O(n)
*/
function logBetween(lowNum, highNum) {
    //initialize result as empty array
    let result = [];


    //the lowNum inputted is lower than the highNum, proceed to fill the array to include the range of numbers, inclusive
    for (let i = lowNum; i <= highNum; i++) {
        result.push(i);
    }


    //otherwise, lowNum is not lower than highNum, in which case return the empty array
    return result;
}
// console.log(logBetween(-1, 2));  // => [-1, 0, 1, 2]
// console.log(logBetween(14, 6));  // => []
// console.log(logBetween(4, 6));  // => [4, 5, 6]



/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*logBetweenStepper
Write a function logBetweenStepper(min, max, step) that takes in three numbers as parameters. The function should return an array of numbers between min and max at step intervals.

Examples:

logBetweenStepper(5, 9, 1) // => [5, 6, 7, 8, 9]
logBetweenStepper(-10, 15, 5) // => [-10, -5, 0, 5, 10, 15]
Time Complexity: O(n), space complexity: O(n)
*/

function logBetweenStepper(min, max, step) {
    //initialize result as empty array
    let result = [];
    //if min is lower than max, and step is lower than the range,
    //then the proper array of numbers will be generated
    for (let i = min; i <= max; i += step) {
        result.push(i);
    }
    //otherwise, an empty array will be returned

    return result;
}

// console.log(logBetweenStepper(5, 9, 1) )// => [5, 6, 7, 8, 9]
// console.log(logBetweenStepper(-10, 15, 5)) // => [-10, -5, 0, 5, 10, 15]

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*
printReverse
Write a function printReverse(min, max) that returns an array of all numbers from max to min (exclusive), in reverse order.

Examples:

printReverse(13, 18) // => [17, 16, 15, 14]
printReverse(90, 94) // => [93, 92, 91]

Time Complexity: O(n), space complexity: O(n)

*/

function printReverse(min, max) {
    //initialize result as empty array
    let result = [];

    //generate range of numbers exclusive, if max is larger than min, otherwise return empty array
    for (let i = max - 1; i > min; i--) {
        result.push(i);
    }

    return result;
}

// console.log(printReverse(13, 18)); // => [17, 16, 15, 14]
// console.log(printReverse(90, 94)); // => [93, 92, 91]

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*
fizzBuzz
Define a function fizzBuzz(max) that takes a number and returns an array of every number from 0 to max that is divisible by either 3 or 5, but not both.

Examples:

fizzBuzz(20); // => [3, 5, 6, 9, 10, 12, 18]

time complexity: O(n), space complexity: O(n)
*/

function fizzBuzz(max) {
    //stores result
    let result = [];
    //loop from 3 to max, check if number is either divisible by 3 or 5 but not both, if so push to array;
    for (let i = 3; i < max; i++) {
        if ((i % 3 === 0 || i % 5 === 0) && !(i % 3 === 0 && i % 5 === 0)) {
            result.push(i);

        }
    }
    return result;
}

// console.log(fizzBuzz(20)); // => [3, 5, 6, 9, 10, 12, 18]
/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*
isPrime
Define a function isPrime(number) that returns true if number is prime. Otherwise, false. Assume number is a positive integer.

Examples:

isPrime(2);  // => true
isPrime(10);  // => false
isPrime(11);  // => true
isPrime(9);  // => false
isPrime(2017);  // => true

Time Complexity: O(n), Space Complexity: O(1);
*/

function isPrime(number) {

    //needs to be larger than 1 to be prime
    if (number < 2) {
        return false;
    }
    //loop from 2 to just below number, if any are divisors of number, it is not prime
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    //if there have been no divisors found, it is a prime

    return true;
}
// console.log(isPrime(2));  // => true
// console.log(isPrime(10));  // => false
// console.log(isPrime(11));  // => true
// console.log(isPrime(9));  // => false
// console.log(isPrime(2017));  // => true
/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*
maxValue
Write a function maxValue(array) that returns the largest value in array. Assume array is an array of numbers.

Examples:

maxValue([12, 6, 43, 2]);  // => 43
maxValue([]);  // => null
maxValue([-4, -10, 0.43]);  // => 0.43
Time Complexity: O(n), Space Complexity: O(1)
*/
function maxValue(array) {

    //if array is empty, return null
    if (array.length === 0) {
        return null;
    }
    //iterates through array once to find the max
    return array.reduce((max, number) => {
        if (max > number) {
            return max;
        } else {
            return number;
        }
    });

}
// console.log(maxValue([12, 6, 43, 2]));  // => 43
// console.log(maxValue([]));  // => null
// console.log(maxValue([-4, -10, 0.43]));  // => 0.43
/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*
myIndexOf
Write a function myIndexOf(array, target) that takes in an array of numbers and a target number as arguments. 
It should return the index value of the target if it is present in the array or -1 if it is not present.

CONSTRAINT: Do not use the indexOf or includes method

Examples:

myIndexOf([1,2,3,4],4); // => 3
myIndexOf([5,6,7,8],2); // => -1

Time Complexity: O(n), Space Complexity: O(1)
*/
function myIndexOf(array, target) {

    //iterate through array, return index if target is found immediately
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i;
        }
    }

    //otherwise return -1
    return -1;
}

// console.log(myIndexOf([1,2,3,4],4)); // => 3
// console.log(myIndexOf([5,6,7,8],2)); // => -1
/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*
factorArray
Write a function factorArray(array, number) that takes in an array of numbers and a number and returns an array of all the factors.

Examples:

factorArray([2,3,4,5,6],20) // => [2,4,5]
factorArray([2,3,4,5,6],35) // => [5]
factorArray([10,15,20,25],5) // => []
Time Complexity: O(N), Space Complexity: O(N)
*/
function factorArray(array, number) {

    //iterates through array, filters out factors
    return array.filter((ele) => {
        return number % ele === 0;
    });

}

// console.log(factorArray([2,3,4,5,6],20) )// => [2,4,5]
// console.log(factorArray([2,3,4,5,6],35) )// => [5]
// console.log(factorArray([10,15,20,25],5) )// => []
/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*
oddRange
Write a function oddRange(end) that takes in a number and returns an array containing all positive odd numbers up to end.

Examples:

oddRange(13);  // => [ 1, 3, 5, 7, 9, 11, 13 ]
oddRange(6);  // => [ 1, 3, 5 ]
Time Complexity: O(n), Space Complexity: O(n)
*/
function oddRange(end) {

    let result = [];
    //loop to end starting from 1, step is 2 so there will only be odd numbers, add the numbers to the result array 

    for (let i = 1; i <= end; i += 2) {
        result.push(i);
    }
    return result;
}
// console.log(oddRange(13));  // => [ 1, 3, 5, 7, 9, 11, 13 ]
// console.log(oddRange(6));  // => [ 1, 3, 5 ]
/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*
reverseHyphenString
Write a function reverseHyphenString(string) that takes in a hyphenated string and returns a the hyphenated string reversed.

Examples:

reverseHyphenString("Go-to-the-store") // => "store-the-to-Go"
reverseHyphenString("Jump,-jump-for-joy") // => "joy-for-jump-Jump,"
Time Complexity: O(n), Space Complexity: O(n)
*/
function reverseHyphenString(string) {

    //split string into word, O(n) operation
    let stringArr = string.split("-");
    //iterate through array using reduce, add each word and "-" to the beginningn of the accumulator, resulting in reversed string
    return stringArr.reduce((result, word) => {
        return word + "-" + result;
    })
}

// console.log(reverseHyphenString("Go-to-the-store")) // => "store-the-to-Go"
// console.log(reverseHyphenString("Jump,-jump-for-joy")) // => "joy-for-jump-Jump,"
/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*
intersect
Write a function intersect(arr1, arr2) that takes in two arrays and returns a new array containing the elements common to both arr1 and arr2.

Examples:

intersect(['a', 'b', 'c', 'd'], ['b', 'd', 'e']) // => [ 'b', 'd' ]
intersect(['a', 'b', 'c'], ['x', 'y', 'z']) // => []
Time Complexity: O(n), Space Complexity: O(n)
*/


function intersect(arr1, arr2) {

    //make object to store the unique elements of the smallest array
    let common = {};
    let smaller;
    let bigger;
    //find which array is longer
    if (arr1.length > arr2.length) {
        smaller = arr2;
        bigger = arr1;
    } else {
        bigger = arr2;
        smaller = arr1;
    }

    //store unique elements in the smaller array inside the object
    smaller.forEach((ele) => {
        if (!common.hasOwnProperty(ele)) {
            common[ele] = 0;
        }
    });

    //filter out the common elements in the larger array and return the result
    return bigger.filter((ele) => common.hasOwnProperty(ele));


}
// console.log(intersect(['a', 'b', 'c', 'd'], ['b', 'd', 'e'])) // => [ 'b', 'd' ]
// console.log(intersect(['a', 'b', 'c'], ['x', 'y', 'z']) )// => []
/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*
mirrorArray
Write a function mirrorArray(array) that takes in an array as an argument and returns a new array "mirrored" as shown in the examples:

Examples:

mirrorArray([1,2,3]);
  // => [ 1, 2, 3, 3, 2, 1 ]
mirrorArray(['a', 'b', 'c', 'd']);
  // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]

  Time Complexity: O(n), Space complexity: O(n)
  */
function mirrorArray(array) {
    //create an array of 2 x the length to hold the mirror array
    let result = new Array(array.length * 2);

    //iterate through array
    array.forEach((ele, index) => {
        //insert the current element into its normal position in the array
        result[index] = ele;
        //insert the current element into its mirror position on the other half of the array
        result[result.length - 1 - index] = ele;
    });
    return result;
}
// console.log(mirrorArray([1,2,3]));
//   // => [ 1, 2, 3, 3, 2, 1 ]
// console.log(mirrorArray(['a', 'b', 'c', 'd']));
//   // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]
/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*
Write a function abbreviate(sentence) that takes in a sentence string and returns a new sentence where words longer than 4 characters have their vowels removed. Assume the sentence has all lowercase characters. Feel free to use the array below in your solution: const vowels = ['a', 'e', 'i', 'o', 'u'];

Examples:

abbreviate('the bootcamp is fun'); // => 'the btcmp is fun'
abbreviate('programming is fantastic'); // => 'prgrmmng is fntstc'
abbreviate('hello world'); // => 'hll wrld'
abbreviate('how are you'); // => 'how are you'
Time Complexity: O(n * k) (k being the length of each word), Space Complexity (n);
*/
function abbreviate(sentence) {
    //split the sentence into words
    let sentenceArr = sentence.split(" ");

    //object to store vowels    
    const vowels = { 'a': 0, 'e': 0, 'i': 0, 'o': 0, 'u': 0 };

    //iterate through array with reduce
    return sentenceArr.reduce((result, word) => {

        //if the word is larger than 4 characters
        if (word.length > 4) {

            //filter out the vowels, add it to result
            let noVowels = word.split("").filter(ele => !vowels.hasOwnProperty(ele));
            return result + " " + noVowels.join("");
        }
        //otherwise, add the word as it is to result;

        return result + " " + word;
    }, "")
}

// console.log(abbreviate('the bootcamp is fun')); // => 'the btcmp is fun'
// console.log(abbreviate('programming is fantastic')); // => 'prgrmmng is fntstc'
// console.log(abbreviate('hello world')); // => 'hll wrld'
// console.log(abbreviate('how are you')); // => 'how are you'

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*
adults
Write a function adults(people) that takes in an array of person objects. The function should return an array containing the names of those who have an age of 18 or higher.

Example:

const ppl = [
  {name: 'John', age: 20},
  {name: 'Jim', age: 13},
  {name: 'Jane', age: 18},
  {name: 'Bob', age: 7}
];

adults(ppl); // => [ 'John', 'Jane' ]
Time Complexity: O(n), Space Complexity: O(n)
*/



function adults(people) {

    let result = [];
    //iterate through entries in people
    for (person of people) {
        //if the person's age is 18 and over
        //add to result
        if (person.age >= 18)
            result.push(person.name);
    }
    return result;
}
// const ppl = [
//     {name: 'John', age: 20},
//     {name: 'Jim', age: 13},
//     {name: 'Jane', age: 18},
//     {name: 'Bob', age: 7}
//   ];

//   console.log(adults(ppl)); // => [ 'John', 'Jane' ]
/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------*/


/*
countScores
Write a function countScores(people) that takes in an array of score objects, people, as its input. A score object, people, has two key-value pairs: a name (string) and a score (number). countScores(people) should return an object that has key-value pairs where each name is a key and the value is their total score.

// Example 1:
const ppl = [
  { name: "Anthony", score: 10 },
  { name: "Fred", score : 10 },
  { name: "Anthony", score: -8 },
  { name: "Winnie", score: 12 }
];
countScores(ppl); // => { Anthony: 2, Fred: 10, Winnie: 12 }

// Example 2
const peeps = [
  { name: "Anthony", score: 2 },
  { name: "Winnie", score: 2 },
  { name: "Fred", score: 2 },
  { name: "Winnie", score: 2 },
  { name: "Fred", score: 2 },
  { name: "Anthony", score: 2 },
  { name: "Winnie", score: 2 }
];

countScores(peeps); // => { Anthony: 4, Fred: 4, Winnie: 6 }

Time Complexity: O(n), Space Complexity: O(n)
*/

function countScores(people) {

    let scores = {};
    //iterate through list of people, add each person's name and score as a key-value pair in the scores object if it is not in object yet
    //if it is in the scores object already, add the current score to the corresponding score in the scores object
    for (person of people) {
        if (!scores.hasOwnProperty(person.name)) {
            scores[person.name] = person.score;
        } else {
            scores[person.name] += person.score;
        }
    }
    return scores;
}
// // Example 1:
// const ppl = [
//     { name: "Anthony", score: 10 },
//     { name: "Fred", score: 10 },
//     { name: "Anthony", score: -8 },
//     { name: "Winnie", score: 12 }
// ];
// console.log(countScores(ppl)); // => { Anthony: 2, Fred: 10, Winnie: 12 }

// // Example 2
// const peeps = [
//     { name: "Anthony", score: 2 },
//     { name: "Winnie", score: 2 },
//     { name: "Fred", score: 2 },
//     { name: "Winnie", score: 2 },
//     { name: "Fred", score: 2 },
//     { name: "Anthony", score: 2 },
//     { name: "Winnie", score: 2 }
// ];

// console.log(countScores(peeps)); // => { Anthony: 4, Fred: 4, Winnie: 6 }

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*
firstNPrimes
Using the isPrime function you made, write a function firstNPrimes(n) that returns an array of the first n prime numbers.

Examples:

firstNPrimes(0);  // => []
firstNPrimes(1);  // => [2]
firstNPrimes(4);  // => [2, 3, 5, 7]

For each number starting from 2, we are counting up from 2 to each number to see if it is a number, which is essentially the sum of n
The gauss summation formula of 0 to n is n(n+1)/2, which is (n^2 + n )/2. The term with the largest degree is n^2, which is the Big O
Time Complexity: O(n^2 ), space complexity: O(n)
*/

function firstNPrimes(n) {
    let result = [];

    //if n is 0 or negative, return empty array
    if (n <= 0) {
        return result;
    }

    let count = 2;
    //run through numbers starting from 2 and see if they are a prime
    // if they are, add them to the results
    //continue this until the length of the result array matches n
    let start = Date.now();

    while (result.length !== n) {
        if (isPrime(count)) {
            result.push(count);
        }

        count++;
    }
    let end = Date.now();
    console.log(end - start);

    return result;
}
//  console.log(firstNPrimes(0));  // => []
//  console.log(firstNPrimes(1));  // => [2]
//  console.log(firstNPrimes(4));  // => [2, 3, 5, 7]

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*
peakFinder
Write a function peakFinder(array) that takes in an array of numbers. It should return an array containing the indices of all the peaks. 
A peak is an element that is greater than both of its neighbors. If it is the first or last element, it is a peak if it is greater than its one neighbor. Assume the array has a length of at least 2.

Examples:

peakFinder([1, 2, 3, 2, 1]); // => [2]
peakFinder([2, 1, 2, 3, 4, 5]); // => [0, 5]
peakFinder([4, 6, 9, 4, 2, -7, 2, -4, 5]); // => [2, 6, 8]


Time Complexity: O(n), Space Complexity: O(n)
*/

function peakFinder(array) {

    let result = [];


    array.forEach((ele, index) => {
        //if it is the first element and larger than the next element, it's a peak
        if (index === 0 && ele > array[index + 1]) {
            result.push(index);
            //if it's the last element and larger than the element before it, its a peak
        } else if (index === array.length - 1 && ele > array[index - 1]) {
            result.push(index);
            //otherwise, it is an interior element, and if it is larger than its members, its a peak
        } else if (ele > array[index - 1] && ele > array[index + 1]) {
            result.push(index);
        }
    });

    return result;
}

// console.log(peakFinder([1, 2, 3, 2, 1])); // => [2]
// console.log(peakFinder([2, 1, 2, 3, 4, 5])); // => [0, 5]
// console.log(peakFinder([4, 6, 9, 4, 2, -7, 2, -4, 5])); // => [2, 6, 8]
/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*
divisibleByThreePairSum
Write a function divisibleByThreePairSum(array) that takes an array of numbers. 
It should return an array of all the pairs of indices, whose elements sum to a multiple of three.

Examples:

const arr1 = divisibleByThreePairSum([1, 6, 3, 4, 2, 0]);
arr1 // => [[0, 4], [1, 2], [1, 5], [2, 5], [3, 4]]

const arr2 = divisibleByThreePairSum([8, 3, 5, 9, 2]);
arr2 // => [[1, 3]]

Time Complexity is still O(n^2), but this solution avoids making unnecessary comparisions/iterations that would be made under a simple solution with a loop nested within another loop, so it is slightly better
Space Complexity is O(n)
*/
function divisibleByThreePairSum(array) {

    let results = [];
    //stores indexes of the remainder formed of each element when they are divided by 3
    let remainderIndices =
    {
        0: [],
        1: [],
        2: []
    }

    //find the remainder formed when dividing each element by 3, and push their index to the corresponding array
    for (let i = 0; i < array.length; i++) {
        remainderIndices[array[i] % 3].push(i);
    }


    // elements with remainder of 0 are multiples of 3, so adding them with each other will create a multiple of three
    //loop through 0 remainder array
    for (let i = 0; i < remainderIndices[0].length; i++) {
        //loop through 0 remainder array starting after the position specified by the outer loop
        for (let j = i + 1; j < remainderIndices[0].length; j++) {
            //push index pairs to results
            results.push([remainderIndices[0][i], remainderIndices[0][j]]);
        }
    }

    //elements with remainder of 1 paired with elements with remainder of 2 form a multiple of three when added together

    //loop through remainder 1 array
    for (let i = 0; i < remainderIndices[1].length; i++) {
        //loop through remainder 2 array
        for (let j = 0; j < remainderIndices[2].length; j++) {
            //push each unique pair of indices to the results
            results.push([remainderIndices[1][i], remainderIndices[2][j]]);
        }
    }
    return results;


}

// const arr1 = divisibleByThreePairSum([1, 6, 3, 4, 2, 0]);
// console.log(arr1); // => [[0, 4], [1, 2], [1, 5], [2, 5], [3, 4]]

// const arr2 = divisibleByThreePairSum([8, 3, 5, 9, 2]);
// console.log(arr2); // => [[1, 3]]


/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*
zipArray
Write a function zipArray(arr1, arr2) that takes in two arrays and "zips" them together by returning a single 2D-array. Assume that both input arrays have the same length.

Examples:

const a1 = ['a', 'b', 'c', 'd'];
const a2 = [10, 20, 30, 40];

const result = zipArray(a1, a2);
result; // => [ [ 'a', 10 ], [ 'b', 20 ], [ 'c', 30 ], [ 'd', 40 ] ]

Time Complexity: O(n), Space Complexity: O(n)
*/

function zipArray(arr1, arr2) {
    return arr1.map((ele, index) => [ele, arr2[index]]);
}
// const a1 = ['a', 'b', 'c', 'd'];
// const a2 = [10, 20, 30, 40];

// const result = zipArray(a1, a2);
// console.log(result); // => [ [ 'a', 10 ], [ 'b', 20 ], [ 'c', 30 ], [ 'd', 40 ] ]

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*
twoDimensionalTotal
Write a function twoDimensionalTotal(array) that takes in a 2D array of numbers and returns the total sum of all elements. Examples:

const arr1 = [
  [5, 2, 5, 3],
  [12, 13],
];

twoDimensionalTotal(arr1);  // => 40

const arr2 = [
  [2],
  [1, 9],
  [1, 1, 1]
]

twoDimensionalTotal(arr2);  // => 15

Time Complexity: O(n) (N being number of elements), Space Complexity: O(1)
*/

function twoDimensionalTotal(array) {


    let result = 0;

    //loop through 2d array
    for (arr of array) {
        //iterate through each sub array using reduce to add up their sum, add it to the results
        result += arr.reduce((sum, ele) => sum + ele);
    }

    return result;
}


// const arr1 = [
//     [5, 2, 5, 3],
//     [12, 13],
//   ];

//   console.log(twoDimensionalTotal(arr1));  // => 40

//   const arr2 = [
//     [2],
//     [1, 9],
//     [1, 1, 1]
//   ]

//   console.log(twoDimensionalTotal(arr2));  // => 15
/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------*/


/*
countInnerElement
Write a function countInnerElement(arr) that takes in a 2-D array of elements. Each element of arr is a sub array that contains multiple elements. The number of elements contained in each sub array are not the same. You can assume each sub array contains at least one element. You should return an object that counts how many times each element in each sub array repeats.

Examples:

const arr1 = [
  [1, 2, 4, 5],
  [2, 7, 4],
  [1, 4, 5, 2, 7]
]

countInnerElement(arr1)  // => {1: 2, 2: 3, 4: 3, 5: 2, 7: 2}

const arr2 = [
  ['a','b','c','d'],
  ['a','b'],
  ['a','c','d','a']
]

countInnerElement(arr2)  // => {a: 4, b: 2, c: 2, d: 2}

Time Complexity: O(n), Space Complexity: O(n)
*/


function countInnerElement(array) {
    //stores frequences of elements
    let frequencies = {};

    //loop through 2D array
    for (arr of array) {
        //loop through each sub array, incremement counts of each unique element
        arr.forEach((ele) => {
            if (!frequencies.hasOwnProperty(ele)) {
                frequencies[ele] = 1;
            } else {
                frequencies[ele]++;
            }
        });
    }

    return frequencies;

}

// const arr1 = [
//     [1, 2, 4, 5],
//     [2, 7, 4],
//     [1, 4, 5, 2, 7]
//   ]

//   console.log(countInnerElement(arr1))  // => {1: 2, 2: 3, 4: 3, 5: 2, 7: 2}

//   const arr2 = [
//     ['a','b','c','d'],
//     ['a','b'],
//     ['a','c','d','a']
//   ]

//   console.log(countInnerElement(arr2))  // => {a: 4, b: 2, c: 2, d: 2}


/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*
twoDiff
Write a function twoDiff(array), given an array of numbers, return a 2-D array, 
where each of the sub array are indices of the two numbers such that their difference is 2. 
If there are no such numbers, return an empty array.

NOTE: The pairs are unique. HINT: Account for negative difference too!

Examples:


twoDiff([2, 3, 4, 6, 1, 7])  // => [[0, 2], [1, 4], [2, 3]]
twoDiff([0, 2, 4, 3, 5])  // => [[0, 1], [1, 2], [3,4]]
twoDiff([])  // => []

Time Complexity: O(n), Space Complexity: O(n)
*/

function twoDiff(array) {
    let results = [];
    let differences = {};
    //iterate through array
    for (let i = 0; i < array.length; i++) {
        //store the difference of each element and 2 as a key and its index as a value
        let diff = array[i] - 2;
        differences[diff] = i;
    }

    //iterate through array
    for (let i = 0; i < array.length; i++) {

        //if the current element is registered in the hash, 
        //pair the index that is listed with that corresponding difference in the hash with the index of the current element

        if (differences.hasOwnProperty(array[i])) {
            results.push([i, differences[array[i]]])
        }
    }

    return results;
}
// console.log(twoDiff([2, 3, 4, 6, 1, 7]))  // => [[0, 2], [1, 4], [2, 3]]
// console.log(twoDiff([0, 2, 4, 3, 5]))  // => [[0, 1], [1, 2], [3,4]]
// console.log(twoDiff([]))  // => []

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*
arrayDiff
Write a function arrayDiff(arr1, arr2) that takes in two arrays. 
The function should return a new array, containing the elements of arr1 that are not also in arr2.

Note: Assume both arrays have unique elements.

Examples:

const array1 = [1, 23, 2, 43, 3, 4]
const array2 = [3, 23]
arrayDiff(array1, array2)  // => [1, 2, 43 ,4]

const array3 = ['a', 'ab', 'c', 'd', 'c']
const array4 = ['d']
arrayDiff(array3, array4)  // => ['a', 'ab', 'c', 'c']

Time Complexity: O(n), Space Complexity: O(n)
*/
function arrayDiff(arr1, arr2) {


    //use hash to store unique elements of arr2
    let unique = {};

    for (let i = 0; i < arr2.length; i++) {
        if (!unique.hasOwnProperty(arr2[i])) {
            unique[arr2[i]] = 0;
        }
    }



    //iterate through arr1, filter out elements that are in arr2

    return arr1.filter((ele) => !unique.hasOwnProperty(ele))
}
// const array1 = [1, 23, 2, 43, 3, 4]
// const array2 = [3, 23]
// console.log(arrayDiff(array1, array2))  // => [1, 2, 43 ,4]

// const array3 = ['a', 'ab', 'c', 'd', 'c']
// const array4 = ['d']
// console.log(arrayDiff(array3, array4))  // => ['a', 'ab', 'c', 'c']

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*
valueCounter
Write a function valueCounter(obj, val) that takes in an object and a value, 
the function should return the number of times val repeats as a value in obj.

Examples:

const obj1 = { 1: 'Anne', 2: 'Alvin', 3: 'Anne', 4: 'Anne' }
valueCounter(obj1, 'Anne')  // => 3

const obj2 = { Anne: 50, Alvin: 1, JJ: 100, Roman: 100 }
valueCounter(obj2, 88)  // => 0

const pairs = { Anne: 'Roman', Alvin: 'Roman', JJ: 'Anne', Roman: 'Anne' }
valueCounter(pairs, 'Roman')  // => 2

Time Complexity: O(n), Space Complexity: O(1)
*/

function valueCounter(obj, val) {

    let count = 0;

    //iterate through object keys, if corresponding value of key matches val, increment count
    for (key in obj) {
        if (obj[key] === val) {
            count++;
        }
    }
    return count;
}

// const obj1 = { 1: 'Anne', 2: 'Alvin', 3: 'Anne', 4: 'Anne' }
// console.log(valueCounter(obj1, 'Anne'))  // => 3

// const obj2 = { Anne: 50, Alvin: 1, JJ: 100, Roman: 100 }
// console.log(valueCounter(obj2, 88) ) // => 0

// const pairs = { Anne: 'Roman', Alvin: 'Roman', JJ: 'Anne', Roman: 'Anne' }
// console.log(valueCounter(pairs, 'Roman') ) // => 2

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*
elementCount
Write a function elementCount(array) that returns a object. Each key corresponds to an element in the array and the value corresponds to how many times that element appears in the array.

Example:

elementCount(["a", "a", "b", "b"]); // => { "a" : 2, "b" : 2 }
elementCount(['c', 'a', 'c', 'a', 'b']); // => { "c": 2, "a": 2, "b": 1 }

Time Complexity: O(n), Space Complexity: O(n)
*/

function elementCount(array) {

    let count = {};

    array.forEach(ele => {
        if (!count.hasOwnProperty(ele)) {
            count[ele] = 1;
        } else {
            count[ele]++;
        }
    });

    return count;
}

// console.log(elementCount(["a", "a", "b", "b"])); // => { "a" : 2, "b" : 2 }
// console.log(elementCount(['c', 'a', 'c', 'a', 'b'])); // => { "c": 2, "a": 2, "b": 1 }

/*-
/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*
nextTwoPrimes
Write a function nextTwoPrimes(num) that takes in a number num and returns the next two prime numbers greater than num.

Examples:

nextTwoPrimes(2);  // => [ 3, 5 ]
nextTwoPrimes(3);  // => [ 5, 7 ]
nextTwoPrimes(7);  // => [ 11, 13 ]
nextTwoPrimes(8);  // => [ 11, 13 ]
nextTwoPrimes(20);  // => [ 23, 29 ]
nextTwoPrimes(97);  // => [ 101, 103 ]

Going through n comparisons for each number we are checking, comes out to sum of n, which is O(n^2)
Time Complexity: O(n^2), Space Complexity: O(1)
*/
function nextTwoPrimes(num) {


    let result = [];

    //start count from num+1
    let count = num + 1;

    //if num is 0, start off countn from 2
    if (count <= 0) {
        count = 2;
    }
    //while the results don't have two prime numbers yet
    while (result.length !== 2) {
        //if the current count is a prime, add it to results
        if (isPrime(count)) {
            result.push(count);
        }
        //increment count
        count++;
    }

    return result;
}
// console.log(nextTwoPrimes(2));  // => [ 3, 5 ]
// console.log(nextTwoPrimes(3));  // => [ 5, 7 ]
// console.log(nextTwoPrimes(7));  // => [ 11, 13 ]
// console.log(nextTwoPrimes(8));  // => [ 11, 13 ]
// console.log(nextTwoPrimes(20));  // => [ 23, 29 ]
// console.log(nextTwoPrimes(97));  // => [ 101, 103 ]

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*
pairProduct
Write a function pairProduct(arr, num) that accepts an array of numbers, arr, and a target number, num. 
It should return pairs of indices whose elements multiply to num. No pair should appear twice in the result.

CONSTRAINT: Use only while loops. No for loops.

Examples:

pairProduct([1, 2, 3, 4, 5], 4); // => [ [ 0, 3 ] ]
pairProduct([1, 2, 3, 4, 5], 8); // => [ [ 1, 3 ] ]
pairProduct([1, 2, 3, 12, 8], 24); // => [ [ 1, 3 ], [ 2, 4 ] ]

time Complexity: O(n), space complexity: O(n)
*/

function pairProduct(arr, num) {

    let results = [];
    //stores quotient of num and each corresponding array element along with its index
    let quotient = {};

    //store quotion of num and each element along with index
    arr.forEach((ele, index) => {
        if (!quotient.hasOwnProperty(num / ele)) {
            quotient[num / ele] = index;
        }
    });

    arr.forEach((ele, index) => {
        //if the current element exists as a registered quotient and the indexes aren't the same, push the pair of indexes to results
        if (quotient.hasOwnProperty(ele) && index !== quotient[ele]) {
            results.push([quotient[ele], index]);
            //delete the entry corresponding to the quotient relating to this element so that duplicates are avoided
            delete quotient[num / ele]

        }


    })

    return results;
}
// console.log(pairProduct([1, 2, 3, 4, 5], 4)); // => [ [ 0, 3 ] ]
// console.log(pairProduct([1, 2, 3, 4, 5], 8)); // => [ [ 1, 3 ] ]
// console.log(pairProduct([1, 2, 3, 12, 8], 24)); // => [ [ 1, 3 ], [ 2, 4 ] ]
/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*
twoDimensionalSize
Write a function twoDimensionalSize(array) that takes in a 2D-array as an argument. The function should return the total number of elements in the 2D-array.

Examples:

const arr1 = [
  [1, 2, 3],
  [4, 5],
  [6, 7, 8, 9]
];
twoDimensionalSize(arr1);  // => 9

const arr2 = [
  ['a'],
  ['b', 'c', 'd', 'e']
];
twoDimensionalSize(arr2);  // => 5

Time Complexity: O(n), space complexity: O(1)
*/

function twoDimensionalSize(array) {

    //iterate through 2D array, add subarray length to count total
    return array.reduce((sum, subarray) => {
        return sum + subarray.length;
    }, 0);
}
// const arr1 = [
//     [1, 2, 3],
//     [4, 5],
//     [6, 7, 8, 9]
//   ];
//   console.log(twoDimensionalSize(arr1));  // => 9

//   const arr2 = [
//     ['a'],
//     ['b', 'c', 'd', 'e']
//   ];
//   console.log(twoDimensionalSize(arr2));  // => 5
/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*
longWordCount
Write a function longWordCount(string) that takes in a string and returns the number of words longer than 7 characters.

Examples:

longWordCount("");  // => 0
longWordCount("short words only");  // => 0
longWordCount("one reallylong word");  // => 1
longWordCount("two reallylong words inthisstring");  // => 2
longWordCount("allwordword longwordword wordswordword");  // => 3
longWordCount("seventy schfifty five");  // => 1

Time Complexity: O(n), space complexity: O(1)

*/

function longWordCount(string) {
    //turn string into array of words
    let stringArray = string.split(" ");


    //iterate through array, increment count if the current word is longer than 7 characters
    return stringArray.reduce((sum, ele) => {
        if (ele.length > 7) {
            return sum + 1;
        }
        return sum;
    }, 0)
}

// console.log(longWordCount(""));  // => 0
// console.log(longWordCount("short words only"));  // => 0
// console.log(longWordCount("one reallylong word"));  // => 1
// console.log(longWordCount("two reallylong words inthisstring"));  // => 2
// console.log(longWordCount("allwordword longwordword wordswordword"));  // => 3
// console.log(longWordCount("seventy schfifty five"));  // => 1

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*
factorial
Write a function factorial(n), that returns the factorial of the number n. For example, the factorial of 4 is 4 * 3 * 2 * 1 = 24.

Examples:

factorial(1);  // => 1
factorial(4);  // => 24
factorial(5);  // => 120
factorial(10);  // => 3628800
Time Complexity: O(n), space complexity: O(1)
*/

function factorial(n) {
    if (n <= 1) {
        return 1;
    }


    //iterate from 2 to n, mulitply all values of i together to find factorial
    let factorial = 1;
    for (let i = 2; i <= n; i++) {
        factorial *= i;
    }

    return factorial
}

// console.log(factorial(1));  // => 1
// console.log(factorial(4));  // => 24
// console.log(factorial(5));  // => 120
// console.log(factorial(10));  // => 3628800

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*
lcm
Write a function lcm(num1, num2) that returns the lowest number which is a multiple of both num1 and num2.

Examples:

lcm(2, 3);  // => 6
lcm(6, 10);  // => 30
lcm(24, 26);  // => 312
Time Complexity: O(log n), space complexity: O(log n)
*/

// lcm = |a * b | / gcd(a,b)
// //helper function gcd
function gcd(a, b) {

    //if a or b is 0, return the other
    if (a === 0)
        return b;
    if (b === 0) {
        return a;
    }

    //a should be bigger or equal to than b
    if (b > a) {
        [a, b] = [b, a]
    }

    //formula is to continually call gcd(b, modulus of a and b until you reach the base cases of a or b becoming 0)

    return gcd(b, a % b);
}


function lcm(num1, num2) {
    //formula = |a * b| / gcd(num1, num2)
    return Math.abs(num1 * num2) / gcd(num1, num2);
}

// console.log(lcm(2, 3));  // => 6
// console.log(lcm(6, 10));  // => 30
// console.log(lcm(24, 26));  // => 312

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*
hipsterfyWord
Write a function hipsterfyWord(word) that takes takes in a string and returns the string with the last vowel removed. 'y' is not a vowel.

Examples:

hipsterfyWord('proper') // => 'propr'
hipsterfyWord('tonic') // => 'tonc'
hipsterfyWord('PANTHER') // => 'PANTHR'
hipsterfyWord('BACKWARDS') // => 'BACKWRDS'

Time Complexity: O(n), Space Complexity: O(n)

*/


function hipsterfyWord(word) {
    const vowels = { 'a': 0, 'e': 0, 'i': 0, 'o': 0, 'u': 0, 'A': 0, 'E': 0, 'I': 0, 'O': 0, 'U': 0 }


    let lastVowelIndex = -1;

    //iterate through word from end to beginning, break look once we find the last vowel if it exists
    for (let i = word.length - 1; i >= 0; i--) {
        if (vowels.hasOwnProperty(word[i])) {
            lastVowelIndex = i;
            break;
        }
    }
    //if there are no vowels, return the word as it is
    if (lastVowelIndex === -1) {
        return word;
    }

    //otherwise, return the word without the character at the lastVowelIndex
    return word.substring(0, lastVowelIndex) + word.substring(lastVowelIndex + 1);


}
// console.log(hipsterfyWord('proper')) // => 'propr'
// console.log(hipsterfyWord('tonic')) // => 'tonc'
// console.log(hipsterfyWord('PANTHER')) // => 'PANTHR'
// console.log(hipsterfyWord('BACKWARDS')) // => 'BACKWRDS'

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------*/

// objectToString
// Write a function objectToString(count) that takes in a char count object and returns a string representing the counts of each character.

// Examples:

// objectToString({ a : 2, b: 4, c: 1 }) // => 'aabbbbc'
// objectToString({ b: 1, o: 2, t: 1 }) // => 'boot'
// Time Complexity: O(n) Space Complexity:O(n)

function objectToString(count) {

    let result = "";
    //iterate through keys in input objct
    for (let key in count) {

        //iterate for the corresponding count number of times, 
        //add the current key to the result string for that number of times
        let currentCount = Number(count[key]);
        for (let i = 0; i < currentCount; i++) {
            result += String(key);
        }
    }

    return result;
}



// console.log(objectToString({ a : 2, b: 4, c: 1 }) )// => 'aabbbbc'
// console.log(objectToString({ b: 1, o: 2, t: 1 })) // => 'boot'

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------*/

// Write a function shortestWord(sentence) that returns the shortest word of a sentence. You can assume that the words of the sentence all have different lengths.

// Examples:

// shortestWord('app academy is cool') // => 'is'
// shortestWord('programming bootcamp') // => 'bootcamp'
// Time Complexity: O(n), Space Complexity: O(n)

function shortestWord(sentence) {
    let stringArr = sentence.split(" ");

    //start off with the smallest being the first word
    let smallest = stringArr[0].length;
    let smallestIndex = 0;

    //iterate through string array, if current word is smaller than smallest currently recorded, update the smallest
    stringArr.forEach((ele, i) => {
        if (ele.length < smallest) {
            smallestIndex = i;
            smallest = ele.length;
        }
    });

    return stringArr[smallestIndex];

}
// console.log(shortestWord('app academy is cool')) // => 'is'
// console.log(shortestWord('programming bootcamp')) // => 'bootcamp'

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------*/

// greatestCommonFactor
// Write a function greatestCommonFactor(num1, num2) that returns the largest number that is divides both num1 and num2.

// Examples:

// greatestCommonFactor(15, 25) // => 5
// greatestCommonFactor(16, 24) // => 8
// greatestCommonFactor(7, 11) // => 1
// Time Complexity: O(log n), Space Complexity: O(log n)

// //helper function gcd
function greatestCommonFactor(a, b) {

    //if a or b is 0, return the other
    if (a === 0)
        return b;
    if (b === 0) {
        return a;
    }

    //a should be bigger or equal to than b
    if (b > a) {
        [a, b] = [b, a]
    }

    //formula is to continually call gcd(b, modulus of a and b until you reach the base cases of a or b becoming 0)

    return gcd(b, a % b);
}

// console.log(greatestCommonFactor(15, 25)) // => 5
// console.log(greatestCommonFactor(16, 24)) // => 8
// console.log(greatestCommonFactor(7, 11)) // => 1


/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*
isPassing
Write a function isPassing(assessments) that takes in an array of assessment objects. The function should return true if the average assessment score is at least 70. It should return false otherwise.

Examples:

const assessments1 = [
  { number: 1, score: 60 },
  { number: 2, score: 90 },
  { number: 3, score: 80 },
  { number: 4, score: 100 },
  { number: 5, score: 85 }
];

isPassing(assessments1) // => true
const assessments2 = [
  { number: 1, score: 60 },
  { number: 2, score: 20 },
  { number: 3, score: 45 }
];

isPassing(assessments2) // => false

Time Complexity: O(n), Space Complexity: O(1)
*/


function isPassing(assessments) {


    //iterate through assements to sum up scores, divide by number of assements and return whether if the average is above 70 or not
    return assessments.reduce((sum, ele) => {
        return sum + ele.score;
    }, 0) / assessments.length >= 70;
}

// const assessments1 = [
//     { number: 1, score: 60 },
//     { number: 2, score: 90 },
//     { number: 3, score: 80 },
//     { number: 4, score: 100 },
//     { number: 5, score: 85 }
//   ];

//   console.log(isPassing(assessments1)) // => true
//   const assessments2 = [
//     { number: 1, score: 60 },
//     { number: 2, score: 20 },
//     { number: 3, score: 45 }
//   ];

//   console.log(isPassing(assessments2)) // => false


/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------*/

// valueConcat
// Write a function valueConcat(array, obj) that takes in an array and object The function should return a new array where each element is concatenated with it's corresponding value from the object.

// Examples:

// const arr = ['alex', 'maurice', 'meagan', 'ali'];
// const obj = { alex: 'bronca', ali: 'harris' }
// valueConcat(arr, obj) // => [ 'alexbronca', 'maurice', 'meagan', 'aliharris' ]

// valueConcat(['a', 'b', 'c'], { b: 2, c: 3 }) // => [ 'a', 'b2', 'c3' ]
// Time Complexity: O(n), Space Complexity: O(n)


function valueConcat(array, obj) {

    //iterate through array, put each element concatenated with its corresponding element in the obj OR '' if the obj does not have it
    return array.map((ele) => String(ele) + (obj.hasOwnProperty(ele) ? String(obj[ele]) : ''))
}
// const arr = ['alex', 'maurice', 'meagan', 'ali'];
// const obj = { alex: 'bronca', ali: 'harris' }

// console.log(valueConcat(arr, obj)) // => [ 'alexbronca', 'maurice', 'meagan', 'aliharris' ]

// console.log(valueConcat(['a', 'b', 'c'], { b: 2, c: 3 })) // => [ 'a', 'b2', 'c3' ]

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------*/
// threeInARow
// Write a function threeInARow(arr) that takes in an array of numbers and returns true if the array contains 3 of the same number consecutively. The function should return false otherwise.

// Examples:

// threeInARow([4, 3, 7, 7, 7, 13, 8]);  // => true;
// threeInARow([10, 9, 20, 33, 3, 3]);  // => false;
// Time Complexity: O(n), Space Complexity: O(1)

function threeInARow(arr) {


    //if array length is shorter then 3, than it is false
    if (arr.length < 3) {
        return false;
    }

    //iterate through array except for the last two elements
    //check if the current element is the same as the next two elements, if it is, return true
    for (let i = 0; i < arr.length - 2; i++) {
        if ((arr[i] + arr[i + 1] + arr[i + 2]) / 3 === arr[i]) {
            return true;
        }
    }

    //at this point, there were no three consecutive numbers found, so return false
    return false;

}

// console.log(threeInARow([4, 3, 7, 7, 7, 13, 8]));  // => true;
// console.log(threeInARow([10, 9, 20, 33, 3, 3]));  // => false;
/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*variableNameify
Write a function variableNameify(words) that takes in an array of words. The function should return a string representing the variable name obtained by combining the words and captitalizing them in mixCased style.

Examples:

variableNameify(['is', 'prime']) // => 'isPrime'
variableNameify(['remove', 'last', 'vowel']) // => 'removeLastVowel'
variableNameify(['MaX', 'VALUE']) // => 'maxValue'


// Time Complexity: O(n), Space Complexity: O(n)
*/
function variableNameify(words) {


    //iterate through array of words
    return words.reduce((camelCase, currentWord, index) => {
        //if its the first word, add it to the result with all lowercase
        if (index === 0) {
            return camelCase + currentWord.toLowerCase();
        } else { //otherwise, add the current word to the result with the first letter capitalized and the rest lowercase
            return camelCase + currentWord[0].toUpperCase() + currentWord.substring(1).toLowerCase();
        }

    }, "")
}

// console.log(variableNameify(['is', 'prime'])) // => 'isPrime'
// console.log(variableNameify(['remove', 'last', 'vowel']) )// => 'removeLastVowel'
// console.log(variableNameify(['MaX', 'VALUE'])) // => 'maxValue'

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*

threeIncreasing
Write a function threeIncreasing(arr) that takes in an array of numbers and returns true if the array contains 3 consecutive numbers in increasing order. The function should return false otherwise. Note that the 3 consecutive numbers should be increasing by 1, so the the second number is 1 greater than the first, and the third number is 1 greater than the second.

Examples:

threeIncreasing([3, 2, 11, 12, 13, 2, 4]);  // => true
threeIncreasing([7, 2, 4, 5, 2, 1, 6]);  // => false

// Time Complexity: O(n), Space Complexity: O(1)

*/



function threeIncreasing(arr) {

    //iterate through array except for last two places, 
    //see if this number and the next two are numbers that consectuivelly increase by 1
    //if so, return true
    for (let i = 0; i < arr.length - 2; i++) {
        if (isHigherByOne(arr[i], arr[i + 1]) && isHigherByOne(arr[i + 1], arr[i + 2])) {
            return true;
        }
    }

    //otherwise, return false
    return false;
}

//helper function
function isHigherByOne(a, b) {
    return a === (b - 1);
}


// console.log(threeIncreasing([3, 2, 11, 12, 13, 2, 4]));  // => true
// console.log(threeIncreasing([7, 2, 4, 5, 2, 1, 6]));  // => false
/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------*/



/*
reverse2D
Write a function reverse2D(array) that takes in a 2D array of strings. The function should return a string representing the elements of the array in reverse order.

Examples:

const arr1 = [
  ['a', 'b', 'c', 'd'],
  ['e', 'f'],
  ['g', 'h', 'i']
];

reverse2D(arr1) // => 'ihgfedcba'
const arr2 = [
  ['Julian', 'Matt', 'Mike'],
  ['Oscar', 'Patrick']
];
reverse2D(arr2) // => 'PatrickOscarMikeMattJulian'

// Time Complexity: O(n), Space Complexity: O(n)

*/


function reverse2D(array) {


    //iterate through array of words
    return array.reduce((result, ele) => {

        //get reversed order concatentation of string in the current subarray
        let currentReverse = ele.reduce((reversed, ele) => {
            return ele + reversed;
        }, "");
        //add it to beginnning of results string
        return currentReverse + result;
    }, "");
}

// const arr1 = [
//     ['a', 'b', 'c', 'd'],
//     ['e', 'f'],
//     ['g', 'h', 'i']
//   ];

//   console.log(reverse2D(arr1)) // => 'ihgfedcba'
//   const arr2 = [
//     ['Julian', 'Matt', 'Mike'],
//     ['Oscar', 'Patrick']
//   ];
//   console.log(reverse2D(arr2)) // => 'PatrickOscarMikeMattJulian'
/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------*/


/*
reverb
Write a function reverb(word) that takes in a word string and returns the word with all characters after the last vowel repeated.

Examples:

reverb('running');  // => 'runninging'
reverb('wild');  // => 'wildild'
reverb('debugged');  // => 'debuggeded'
reverb('my');  // => 'my'
// Time Complexity: O(n), Space Complexity: O(n)

*/


function reverb(word) {
    const vowels = { 'a': 0, 'e': 0, 'i': 0, 'o': 0, 'u': 0 }

    let lastVowelIndex = -1;

    //iterate through word form end to front to find index of last vowel
    for (let i = word.length - 1; i >= 0; i--) {
        if (vowels.hasOwnProperty(word[i])) {
            lastVowelIndex = i;
            break;
        }
    }


    //if there are no vowels, return just the word
    if (lastVowelIndex === -1) {
        return word;
    } else { //otherise, return the word + the charcters from the last vowel index
        return word + word.substring(lastVowelIndex)
    }
}


// console.log(reverb('running'));  // => 'runninging'
// console.log(reverb('wild'));  // => 'wildild'
// console.log(reverb('debugged'));  // => 'debuggeded'
// console.log(reverb('my'));  // => 'my'

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------*/

// countRepeats
// Write a function countRepeats(string) that takes in a string and returns the number of letters that appear more than once in the string. You may assume the string contains only lowercase letters. Count the number of letters that repeat, not the number of times they repeat in the string.

// Examples:

// countRepeats('calvin'); // => 0
// countRepeats('caaaalvin'); // => 1
// countRepeats('pops'); // => 1
// countRepeats('mississippi'); // => 3
// countRepeats('hellobootcampprep'); // => 4
// Time Complexity: O(n), Space Complexity: O(n)


function countRepeats(string) {
    let count = {};


    //iterate through string and store number of occurences in object
    for (let i = 0; i < string.length; i++) {
        if (!count.hasOwnProperty(string[i])) {
            count[string[i]] = 1;
        } else {
            count[string[i]]++;
        }
    }

    //iterate through counts in object and return the number of values over or equal to 2
    return Object.values(count).reduce((sum, ele) => {
        if (ele >= 2) {
            return sum + 1;
        }
        return sum;
    }, 0)

}

// console.log(countRepeats('calvin')); // => 0
// console.log(countRepeats('caaaalvin')); // => 1
// console.log(countRepeats('pops')); // => 1
// console.log(countRepeats('mississippi')); // => 3
// console.log(countRepeats('hellobootcampprep')); // => 4
/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*
pairsToString
Write a function pairsToString(arr) that takes in an array of pairs. The function should return a string corresponding to the pairs.

Examples:

const array1 = [
  ['a', 3],
  ['b', 1],
  ['c', 2]
];
pairsToString(array1);  // => 'aaabcc'

const array2 = [
  ['f', 1],
  ['o', 2],
  ['d', 1],
  ['!', 1]
];
pairsToString(array2);  // => 'food!'

// Time Complexity: O(n), Space Complexity: O(n)

*/
function pairsToString(arr) {


    //iterate through array
    return arr.reduce((result, current) => {

        //iterate for the number of times specified in the current pair
        //and add the current pair's character to the results for that number of iterations
        let repeats = "";
        for (let i = 0; i < current[1]; i++) {
            repeats += current[0];
        }
        return result + repeats;
    }, "")
}



// const array1 = [
//     ['a', 3],
//     ['b', 1],
//     ['c', 2]
//   ];
//   console.log(pairsToString(array1));  // => 'aaabcc'

//   const array2 = [
//     ['f', 1],
//     ['o', 2],
//     ['d', 1],
//     ['!', 1]
//   ];
//   console.log(pairsToString(array2));  // => 'food!'
/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------*/

// countAdjacentSums
// Write the function countAdjacentSums(arr, n) that takes an array and number. It should count the number of times that two adjacent numbers in an array add up to n.

// Examples:

// countAdjacentSums([1, 5, 1], 6) // => 2
// countAdjacentSums([7, 2, 4, 6], 7) // => 0
// countAdjacentSums([6, 7, 11, 2, 5, 10, 3], 13) // => 3
// Time Complexity: O(n), Space Complexity: O(1)



function countAdjacentSums(arr, n) {


    let count = 0;

    //iterate through array except for last index
    //see if the current element and the next element add up to n, if so, incrememnt count
    for (let i = 0; i < arr.length - 1; i++) {
        if ((arr[i] + arr[i + 1]) === n) {
            count++;
        }
    }

    return count;
}

// console.log(countAdjacentSums([1, 5, 1], 6)) // => 2
// console.log(countAdjacentSums([7, 2, 4, 6], 7)) // => 0
// console.log(countAdjacentSums([6, 7, 11, 2, 5, 10, 3], 13)) // => 3

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------*/

// signFlipCount
// Write a function signFlipCount(nums) that takes in an array of numbers as arguments. The function should return the number of times adjacent numbers in the array switch signs from positive to negative or vice versa. The number 0 is neither positive nor negative.

// Examples:

// signFlipCount([5, 6, 10, 3]); // => 0
// signFlipCount([-12, 0, -3, -5]); // => 0
// signFlipCount([-12, 10, -3, -5]); // => 2
// signFlipCount([1, -2, -3, -4]); // => 1
// signFlipCount([-1, 11.3, -3, 100]); // => 3
// Time Complexity: O(n), Space Complexity: O(1)


function signFlipCount(nums){


    let count = 0;

    //iterate through array except for last index
//look for change in signs, increment countwhen it happens
    for(let i = 0; i < nums.length -1; i++){
        if(changesSign(nums[i], nums[i+1])){
            count++;
        }


    }

    // return the count
    return count;
}

//helper function
function changesSign(a,b){
    return (a>0 && b < 0) || (a<0 && b > 0);
}

// console.log(signFlipCount([5, 6, 10, 3])); // => 0
// console.log(signFlipCount([-12, 0, -3, -5])); // => 0
// console.log(signFlipCount([-12, 10, -3, -5])); // => 2
// console.log(signFlipCount([1, -2, -3, -4])); // => 1
// console.log(signFlipCount([-1, 11.3, -3, 100])); // => 3

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*
powerSequence
Write a function powerSequence(base, length) that takes in two numbers, base and length. The function should return an array containing a power sequence with the given length. Assume that the length is at least 1.

The first number of a power sequence begins with base. The second number of the sequence is the product between the first number and the base. The third number of the sequence is the product between the second number and the base...

Examples:

powerSequence(3, 4);  // => [ 3, 9, 27, 81 ]
powerSequence(2, 6);  // => [ 2, 4, 8, 16, 32, 64 ]
powerSequence(8, 3);  // => [ 8, 64, 512 ]
*/
// Time Complexity: O(n), Space Complexity: O(n)


function powerSequence(base, length){
    let arr = [base];


    for(let i = 1; i < length; i++){
        arr.push(arr[i-1] * base);
    }


    return arr;
}

// console.log(powerSequence(3, 4));  // => [ 3, 9, 27, 81 ]
// console.log(powerSequence(2, 6));  // => [ 2, 4, 8, 16, 32, 64 ]
// console.log(powerSequence(8, 3));  // => [ 8, 64, 512 ]
/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------*/


/*
collapseString
Write a function collapseString(str) that takes in a string as an argument. The function should return the string where 'streaks' of consecutive characters are collapsed to a single character.

Hint: use the keyword continue

Examples:

collapseString('apple'); // => 'aple'
collapseString('AAAaalviiiiin!!!'); // => 'Aalvin!'
collapseString('hello   app academy'); // => 'helo ap academy'

// Time Complexity: O(n), Space Complexity: O(n)

*/


function collapseString(str){
    let result = "";

    let lastChar ="";

    //iterate through string
    for(let i = 0; i < str.length; i++){

        //if the lastChar is not equal to the current char, add it to results
        if(lastChar !== str[i]){
            result+=str[i];
        } 

        //update the lastChar to be the current char before moving to the next char
        lastChar = str[i];
    }

    return result;
}


// console.log(collapseString('apple')); // => 'aple'
// console.log(collapseString('AAAaalviiiiin!!!')); // => 'Aalvin!'
// console.log(collapseString('hello   app academy')); // => 'helo ap academy'
/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*

oddWordsOut
Write a function oddWordsOut(sentence) that takes in a sentence string and returns the sentence where words with an odd number of characters are removed.

Examples:

oddWordsOut('go to the store and buy milk');  // => 'go to milk'
oddWordsOut('what is the answer');  // => 'what is answer'

// Time Complexity: O(n), Space Complexity: O(n)

*/

function oddWordsOut(sentence){
    

    //split sentence into array of words, filter out words that are odd in length
    let sentenceArr = sentence.split(" ").filter( ele => ele.length%2 ===0)


    //turn resulting sentence array into string sentence
    return sentenceArr.join(" ");
    
}

// console.log(oddWordsOut('go to the store and buy milk'));  // => 'go to milk'
// console.log(oddWordsOut('what is the answer'));  // => 'what is answer'
/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*

mindPsAndQs
Write a function mindPsAndQs(str) that accepts a string of uppercase letters. The function should return the length of the longest consecutive streak of the letters 'P' and 'Q'.

Hint: Use two variables. One to track the length of the current streak and another to track the length of the longest streak so far. Think of using a strategy similar to maxValue. This can also be solved using a single loop!

Nested loops not needed!

Examples:

mindPsAndQs('BOOTCAMP');  // => 1
mindPsAndQs('APCDQQPPC');  // => 4
mindPsAndQs('PQPQ');  // => 4
mindPsAndQs('PPPXQPPPQ');  // => 5
// Time Complexity: O(n), Space Complexity: O(n)

*/


function mindPsAndQs(str){

    let maxLength =0;
    let currentLength = 0;


    for(let i = 0; i < str.length; i++){

      
        if(str[i] === 'Q' || str[i] === 'P'){
            currentLength++;
        }  
         if(currentLength > maxLength){
            maxLength = currentLength;
        }
        
        if(str[i] !== 'Q' && str[i] !== 'P'){
            currentLength = 0;
        }
    }



    return maxLength;
}

// console.log(mindPsAndQs('BOOTCAMP'));  // => 1
// console.log(mindPsAndQs('APCDQQPPC'));  // => 4
// console.log(mindPsAndQs('PQPQ'));  // => 4
// console.log(mindPsAndQs('PPPXQPPPQ'));  // => 5

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*
commonFactors
Write a function commonFactors(num1, num2) that returns an array that contains the common factors between both numbers. A factor is a number that divides another number with no remainder.

Examples:

commonFactors(12, 50);  // => [ 1, 2 ]
commonFactors(6, 24);  // => [ 1, 2, 3, 6 ]
commonFactors(11, 22);  // => [ 1, 11 ]
commonFactors(45, 60);  // => [ 1, 3, 5, 15 ]
// Time Complexity: O(n^2), Space Complexity: O(n)

*/

function commonFactors(num1, num2){
    
    //make sure num1 is smallest
    if( num1 > num2){
        [num1, num2] = [num2, num1]
    }


    //factors of a number extend from 1 to half itself, as well as the number itself
    let results = [];

    //loop up to the sq root of num1, check for common factors and add them in
    for(let i = 1; i <= Math.ceil(num1/2); i++){
        if(num1 % i === 0 && num2 % i === 0){
            results.push(i);
        }
    }
    //check if num1 is a factor of num2
    if(num2%num1 === 0){
        results.push(num1);
    }


    return results;
}
// console.log(commonFactors(12, 50));  // => [ 1, 2 ]
// console.log(commonFactors(6, 24));  // => [ 1, 2, 3, 6 ]
// console.log(commonFactors(11, 22));  // => [ 1, 11 ]
// console.log(commonFactors(45, 60));  // => [ 1, 3, 5, 15 ]



/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*
commonPrimeFactors
Write a function commonPrimeFactors(num1, num2) that takes in two numbers as arguments and returns an array of all prime factors that are common between the two numbers. A factor is a number that divides another number without resulting in a remainder.

Examples:

commonPrimeFactors(12, 50);  // => [ 2 ]
commonPrimeFactors(6, 24);  // => [ 2, 3 ]
commonPrimeFactors(11,22);  // => [ 11 ]
commonPrimeFactors(45, 60);  // => [ 3, 5 ]
// Time Complexity: O(n^2), Space Complexity: O(n)

*/

//helper function 
function isPrime(number) {

    //needs to be larger than 1 to be prime
    if (number < 2) {
        return false;
    }
    //loop from 2 to just below number, if any are divisors of number, it is not prime
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    //if there have been no divisors found, it is a prime

    return true;
}

function commonPrimeFactors(num1, num2){


       //make sure num1 is smallest
    if( num1 > num2){
        [num1, num2] = [num2, num1]
    }


    let results = [];
    //loop from 2 to half of num1, if current number is prime and common factor of num1 and num2, add to results
    for(let i = 2; i < Math.ceil(num1/2); i++){
        if(isPrime(i) && num1%i === 0 && num2%i === 0){
            results.push(i);
        }
    }
    //if num1 is prime and is divisor of num2, add to results
    if(isPrime(num1) && num2%num1===0){
        results.push(num1);
    }

    return results;
}
// console.log(commonPrimeFactors(12, 50));  // => [ 2 ]
// console.log(commonPrimeFactors(6, 24));  // => [ 2, 3 ]
// console.log(commonPrimeFactors(11,22));  // => [ 11 ]
// console.log(commonPrimeFactors(45, 60));  // => [ 3, 5 ]

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------*/


/*
splitHalfArray
Write a function splitHalfArray(array) that takes in an array as an argument and returns two halves of that array split in the middle. If the array has an odd number of elements, then the middle element should be excluded.

Examples:

splitHalfArray([1, 2, 3, 4, 5]);
  // => [ [ 1, 2 ], [ 4, 5 ] ]

splitHalfArray(['a', 'b', 'c', 'd', 'e', 'f']);
  // => [ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ] ]
  // Time Complexity: O(n), Space Complexity: O(n)

  */


  function splitHalfArray(array){


    //middle of array
    let middle = array.length/2;

    //returns 2d array of halves of array, if odd it should leave out the middle

    return [ array.slice(0, Math.floor(middle)), array.slice(Math.ceil(middle))];



  }
//   console.log(splitHalfArray([1, 2, 3, 4, 5]));
//   // => [ [ 1, 2 ], [ 4, 5 ] ]

// console.log(splitHalfArray(['a', 'b', 'c', 'd', 'e', 'f']));
//   // => [ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ] ]

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------*/


/*

threeUniqueVowels
Write a function threeUniqueVowels(string) that takes in a string and returns true if the string contains at least three different vowels.

const VOWELS = ['a', 'e', 'i', 'o', 'u'];
Examples:

threeUniqueVowels('delicious');  // => true
threeUniqueVowels('the bootcamp');  // => true
threeUniqueVowels('bootcamp');  // => false
threeUniqueVowels('dog');  // => false
threeUniqueVowels('go home');  // => false
// Time Complexity: O(n), Space Complexity: O(n)

*/

function threeUniqueVowels(string){
    let VOWELS = {'a':0, 'e':0, 'i':0, 'o':0, 'u':0};

    let count = 0;
    //iterate through string

    for(let i = 0; i< string.length; i++){
        //if we encounter a unique vowel, delete it from vowels object
        //and increment count
        if(VOWELS.hasOwnProperty(string[i])){
            delete VOWELS[string[i]];
            count++
        }
        //if count reaches three return true immediately
        if(count === 3){
            return true;
        }
    }

    //return false otherwise
    return false;
}


// console.log(threeUniqueVowels('delicious'));  // => true
// console.log(threeUniqueVowels('the bootcamp'));  // => true
// console.log(threeUniqueVowels('bootcamp'));  // => false
// console.log(threeUniqueVowels('dog'));  // => false
// console.log(threeUniqueVowels('go home'));  // => false

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*
vowelShift
Write a function vowelShift(sentence) that takes in a sentence string. The function should return a new sentence, where every vowel is replaced with the next vowel in the alphabet.

const VOWELS = ['a', 'e', 'i', 'o', 'u'];
Examples:

vowelShift('bootcamp');  // => 'buutcemp'
vowelShift('hello world');  // => 'hillu wurld'
vowelShift('on the hunt');  // => 'un thi hant'
// Time Complexity: O(n), Space Complexity: O(n)
*/

function vowelShift(sentence){
    //holds a vowel and the next vowel after each one
    let VOWELS = {'a':'e', 'e':'i', 'i':'o', 'o':'u', 'u':'a'};

    let result = "";

    // iterate through sentence, if current char is a vowel add the next value to the result string
    //otherwise, add the character as it is to the result string
    for(let i = 0; i < sentence.length; i++){
        if (VOWELS.hasOwnProperty(sentence[i])){
            result+=VOWELS[sentence[i]];
        } else{
            result+= sentence[i];
        }
    }

    return result;
}

// console.log(vowelShift('bootcamp') ); // => 'buutcemp'
// console.log(vowelShift('hello world'));  // => 'hillu wurld'
// console.log(vowelShift('on the hunt'));  // => 'un thi hant'
/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*
hasSymmetry
Write a function hasSymmetry(array) that takes in an array. The function should return true if the array has symmetry, false otherwise. For an array to have symmetry, it should be the same forwards and backwards.

TIP: In JavaScript, it is not possible to compare arrays for equality with ===. In other words, [1, 2, 3] === [1, 2, 3] evaluates to false.

Examples:

hasSymmetry([1, 2, 3, 3, 2, 1]) // => true
hasSymmetry([1, 2, 3, 3, 4, 1]) // => false
hasSymmetry(['cat', 'dog', 'bird', 'dog', 'cat']) // => true
hasSymmetry(['cat', 'dog', 'bird', 'bird', 'cat']) // => false

// Time Complexity: O(n), Space Complexity: O(1)

*/

function hasSymmetry( array){

    //iterate from 0 to middle index of array
    //compare each element from one end of the array to its corresponding element on the other end
    //if they aren't equal, return false;
    for(let i = 0; i < Math.floor(array.length/2); i++){
        if(array[i] !== array[array.length-i-1]){
            return false;
        }
    }
    //at this point, we have iterated through the array and found there were no differences in the two halves
    //so return true

    return true;
}
// console.log(hasSymmetry([1, 2, 3, 3, 2, 1])) // => true
// console.log(hasSymmetry([1, 2, 3, 3, 4, 1])) // => false
// console.log(hasSymmetry(['cat', 'dog', 'bird', 'dog', 'cat'])) // => true
// console.log(hasSymmetry(['cat', 'dog', 'bird', 'bird', 'cat'])) // => false

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*
evenSumArray
Write a function evenSumArray(array) that takes in an array of numbers and returns a new array where each num is replaced with the sum of all even numbers less than or equal to that num.

Examples:

evenSumArray([6, 7, 5]) // => [ 12, 12, 6 ]
evenSumArray([2, 8, 3, 5]) // => [ 2, 20, 2, 6 ]
// Time Complexity: O(n), Space Complexity: O(n)

*/
function evenSumArray(array){
    //iterate through array
    return array.map( (ele) =>{
        
        //can divide and floor the quotient of a number and 2 to find the number of even numbers equal or below it
        let numOfEvens = Math.floor(ele/2);

        //can use gauss summation formula to get sum of all positive numbers below/equal to numOfEvens
        //these numbers are the number of times each even number is multiplied by 2
        
        // multiply the sum by two to get the sum of evens 
        //2 * ((n)(n+1)/2 ) ===== (n)(n+1)
         return (numOfEvens) * (numOfEvens +1);
    });
}

// console.log(evenSumArray([6, 7, 5])) // => [ 12, 12, 6 ]
// console.log(evenSumArray([2, 8, 3, 5])) // => [ 2, 20, 2, 6 ]

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*
numsToWords
Write a function numsToWords(numString) that takes in a string representing a number. The function should return a new string where each digit character is replaced with it's "word" representation. Assume the input string only contains numeric characters.

Examples:

numsToWords('42') // => 'FourTwo'
numsToWords('123') // => 'OneTwoThree'
numsToWords('159598') // => 'OneFiveNineFiveNineEight'
// Time Complexity: O(n), Space Complexity: O(n)

*/


function numsToWords(numString){

    //stores word representations of numbers
    let numsWords = {

        '1': "One",
        '2': "Two",
        '3': "Three",
        '4': "Four",
        '5': "Five",
        '6': "Six",
        '7':"Seven",
        '8': "Eight",
        "9":"Nine",
    }

    let result = "";
    
    //iterate through string, use numsWords to look up the word representation of each number and add it to the result string
    for(let i = 0; i < numString.length; i++){
        result+=numsWords[numString[i]]
    }

    return result;


}
// console.log(numsToWords('42') )// => 'FourTwo'
// console.log(numsToWords('123')) // => 'OneTwoThree'
// console.log(numsToWords('159598')) // => 'OneFiveNineFiveNineEight'
/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*
moreDotLessDash
Write a function moreDotLessDash(str) that takes in a string and returns the true if the string contains more dots ('.') than dashes ('-'), false otherwise.

Examples:

moreDotLessDash('2-D arrays are fun. I think.');  // => true
moreDotLessDash('.-.-.');  // => true
moreDotLessDash('.-');  // => false
moreDotLessDash('..--');  // => false

// Time Complexity: O(n), Space Complexity: O(n)

*/

function moreDotLessDash(str){
let numDots = 0;
let numDashes = 0;

//iterate through string
for(let i = 0; i < str.length; i++){
    //if current char is a dot, increment numDots
    if(str[i] === '.'){
        numDots++;
    }
    //if current char is a dash, increment numDashes
    if(str[i] === '-'){
        numDashes++;
    }
}

//return whether numDots is larger than numDashes
return numDots > numDashes;
}


console.log(moreDotLessDash('2-D arrays are fun. I think.'));  // => true
console.log(moreDotLessDash('.-.-.'));  // => true
console.log(moreDotLessDash('.-'));  // => false
console.log(moreDotLessDash('..--'));  // => false
