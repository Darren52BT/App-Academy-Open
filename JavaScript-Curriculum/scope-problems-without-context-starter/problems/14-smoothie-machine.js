/***********************************************************************
Write a function named `smoothieMachine` that accepts any number of params and
a function.

The return function will also accept any number of params and will return a
string including all of the parameters of smoothieMachine and the return
function.

See below for examples:

let smoothie1 = smoothieMachine();

console.log(smoothie1("milk"));
// prints "I'm having a smoothie with milk"
console.log(smoothie1("kale", "spinach"));
// prints "I'm having a smoothie with milk and kale and spinach"
console.log(smoothie1("honey", "pears", "berries"));
// prints "I'm having a smoothie with milk and kale and spinach and honey and pears and berries"

let smoothie2 = smoothieMachine("apples", "bananas", "berries");
console.log(smoothie2("pineapple"));
// prints "I'm having a smoothie with apples and bananas and berries and pineapple"
***********************************************************************/

// your code here
function smoothieMachine(...foods) {
  //starting sentence
  let smoothie = "I'm having a smoothie with ";
  //if there are arguments, add them to smoothie separated by " and "
  if (foods.length > 0) {
    smoothie += foods.join(" and ");
  }
  //returns inner function that closes over smoothie
  return (...moreFoods) => {
    //if smoothie has already been added to, add " and " + arguments joined by " and "
    if (smoothie !== "I'm having a smoothie with ") {
      return smoothie += " and " + [...moreFoods].join(" and ");
    } else { //if smoothie hasn't been added to, add arguments joined by " and "
      return smoothie += [...moreFoods].join(" and ")
    };

  }
}
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = smoothieMachine;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
