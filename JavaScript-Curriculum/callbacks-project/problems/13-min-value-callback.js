/*******************************************************************************
Write a function `minValueCallback` that accepts an array and an optional callback as arguments.
If a callback is not passed in, then the function should return the smallest
value in the array. If a callback is passed in, then the function should return
the result of the smallest value being passed into the given callback.

Examples:
console.log(minValueCallback([64, 25, 49, 9, 100]));             // 9
console.log(minValueCallback([64, 25, 49, 9, 100], Math.sqrt));  // 3

*******************************************************************************/

let minValueCallback = function (array, cb) {
    let small;
    //if no callback, set smallest to first element of array
    if (cb === undefined) {
        small = array[0];
    } else { //if there is callback, set it to callback result of first element
        small = cb(array[0]);
    }
    //loop through array
    for (let i = 0; i < array.length; i++) {
        //if no callback and array element is smaller than current smallest
        //set smallest to array element
        if (cb === undefined && array[i] < small) {
            small = array[i];
        }
        //if there is callback and callback result of array element is
        //smaller than current smallest
        //set smallest to callback result
        else if (cb !== undefined && cb(array[i]) < small) {
            small = cb(array[i]);
        }
    }

    return small;

};






/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = minValueCallback;
