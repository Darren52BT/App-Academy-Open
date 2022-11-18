/*
Write a function `repeatingTranslate` that accepts a sentence as an argument.
The function should translate the sentence according to the following rules:

- words that are shorter than 3 characters are unchanged
- words that are 3 characters or longer are translated according to the
  following rules:
  - if the word ends with a vowel, simply repeat the word twice (example:
    'like'->'likelike')
  - if the word ends with a non-vowel, repeat all letters that come after the
    word's last vowel, including the last vowel itself (example:
    'trash'->'trashash')

Note that if words are capitalized in the original sentence, they should remain
capitalized in the translated sentence. Vowels are the letters a, e, i, o, u.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Can you reduce the problem into helper functions?

Examples:

console.log(repeatingTranslate("we like to go running fast"));  // "we likelike to go runninging fastast"
console.log(repeatingTranslate("he cannot find the trash"));    // "he cannotot findind thethe trashash"
console.log(repeatingTranslate("pasta is my favorite dish"));   // "pastapasta is my favoritefavorite dishish"
console.log(repeatingTranslate("her family flew to France"));   // "herer familyily flewew to FranceFrance"

*/

let repeatingTranslate = function (sentence) {
    // Your code here
    //run each word of sentence through translateWord, return sentence of altered words
    return sentence.split(" ").map(translateWord).join(" ");
};


let translateWord = function (word) {
    // Your code here
    // if word is less than 3 characters, leave as is
    if (word.length < 3) {
        return word;
    }
    let vowels = "aeiou";
    //if last letter of word is vowel, repeat word
    if (vowels.includes(word[word.length - 1].toLowerCase())) {
        return word + word;
    } else {// if last letter isn't vowel
        let suffix = "";
        //starting from end of word, add each letter to suffix until a vowel is encountered (add vowel too)
        for (let i = word.length - 1; i >= 0; i--) {
            suffix = word[i] + suffix;
            //if vowel is encountered, return word and suffix
            if (vowels.includes(word[i].toLowerCase()))
                return word + suffix;
        }
        //if no vowel, return just the word
        return word;
    }






};

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = repeatingTranslate;
} catch (e) {
    module.exports = null;
}
