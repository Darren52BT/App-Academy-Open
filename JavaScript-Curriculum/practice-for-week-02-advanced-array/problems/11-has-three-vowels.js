/*
Write a function `hasThreeVowels` that accepts a string as an argument.
The function should return a boolean indicating whether or not the string
contains at least three different vowels.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false

*/

let hasThreeVowels = function (string) {
    // Your code here
//splits into array of letters
    return string.split("").reduce((vowels, next) => {
        let vow = "aeiou";
        //if the current letter is a vowel and the string of found distinct vowels doesn't have it, add it to the string
        if (vow.includes(next.toLowerCase()) && !vowels.includes(next.toLowerCase())) {
            return vowels + next.toLowerCase();
            //if the vowel has already been found or the letter isn't a vowel, return just the string of found vowels
        } else {
            return vowels;
        }
    }, "").length >= 3; //returns whether the string of found distinct vowels is larger than 3
};

// Your code here

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hasThreeVowels;
} catch (e) {
    module.exports = null;
}
