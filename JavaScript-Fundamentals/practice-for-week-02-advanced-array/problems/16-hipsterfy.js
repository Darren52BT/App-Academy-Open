/*

Write a function `hipsterfy(sentence)` that takes in a sentence string and
returns the sentence where every word is missing it's last vowel.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'

*/

let removeLastVowel = function (word) {
    // Your code here
    let vowels = "aeiou";
    //returns word without last vowel
    for (let i = word.length - 1; i >= 0; i--) {
        if (vowels.includes(word[i].toLowerCase()))
            return word.substring(0, i) + word.substring(i + 1, word.length);
    }
    //if there are no vowels, just return the word as it is
    return word;
};

let hipsterfy = function (sentence) {
    // Your code here
    let result = [];
    //removes last vowel from each word and pushes the word to an array
    sentence.split(" ").forEach(word => {
        result.push(removeLastVowel(word));
    });

    return result.join(" ");
};

// alternative solution using Array.map
// let hipsterfy = function(sentence) {
//     return sentence.split(' ').map(removeLastVowel).join(' ');
// };

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hipsterfy;
} catch (e) {
    module.exports = null;
}
