/***********************************************************************
Write a recursive function that will find the best way to make change from a
given set of coin values for a given amount of money. The set of coin values
should default to using pennies (1 cent), nickels (5 cents), dimes (10 cents),
and quarters (25 cents). Return `null` if there are no possible ways to make
change for the given target amount.

Examples:

makeChange(21); // [1, 10, 10]
makeChange(75); // [25, 25, 25]
makeChange(33, [15, 3]); // [3, 15, 15]
makeChange(34, [15, 3]); // null
makeChange(24, [10, 7, 1]) // [7, 7, 10]

Here's a game plan for solving the problem:

First, write a 'greedy' version called `greedyMakeChange`:

Take as many of the biggest coin as possible and add them to your result.
Add to the result by recursively calling your method on the remaining amount,
leaving out the biggest coin, until the remainder is zero.
Once you have a working greedy version, talk with your partner about refactoring
this to `makeBetterChange`. What's wrong with `greedyMakeChange`?

Consider the case of `greedyMakeChange(24, [10,7,1])`. Because it takes as many
10 pieces as possible, `greedyMakeChange` misses the correct answer of
`[10,7,7]` (try it in node).

To `makeBetterChange`, we only take one coin at a time and never rule out
denominations that we've already used. This allows each coin to be available
each time we get a new remainder. By iterating over the denominations and
continuing to search for the best change, we assure that we test for
'non-greedy' uses of each denomination.

Discuss the following game plan and then work together to implement your
new method:

- Iterate over each coin.
- Grab only one of that one coin and recursively call `makeBetterChange` on the
  remainder using coins less than or equal to the current coin.
- Add the single coin to the change returned by the recursive call. This will be
  a possible solution, but maybe not the best one.
- Keep track of the best solution and return it at the end.

N.B. Don't generate every possible permutation of coins and then compare them.
Remember that a permutation is not the same thing as a combination - we will
need to check every combination of coins that add up to our target, we just
don't want to check the same combination in different orders. If you get stuck
you can start by writing a solution that calculates and compares all of the
permutations without storing them in an array. Then go back and refactor your
solution so that it only calculates and compares all of the different
combinations.
***********************************************************************/

function greedyMakeChange(target, coins = [25, 10, 5, 1]) {
  // no tests for greedyMakeChange so make sure to test this on your own
  // your code here
  //inner function
  let makeChange = (target, coins) => {
    if (target < 0) {
      return null;
    }
    if (target === 0) {
      return [];
    }
    for (coin in coins) {
      //if it is possible for this coin to be substracted from total
      if (target - coins[coin] >= 0) {
        //add current coin to solution, make recursive call with decreased change
        return [coins[coin], ...makeChange(target - coins[coin], coins)];
      }
      //if there is still money left over but no change can be made, add null
      else if (coin == coins.length - 1 && target > 0) {
        return [null];
      }
    }
  }
  //get result
  let change = makeChange(target, coins);
  //if there is a null, that means we could not make proper change, return null
  if (change.includes(null)) {
    return null;
  }
  //otherwise, return the change
  return change;
}

function makeBetterChange(target, coins = [25, 10, 5, 1]) {
  // your code here
  let makeChange = (target, coins, combination = [], solutions = [], coinComparisons = {}) => {
    //if proper change has been made and this permutation is a unique combination, this permutation is pushed to solutions
    if (target === 0) {
      //array for saving the kinds of coins in the permuation
      let currentCoinCount = Array(coins.length);
      currentCoinCount.fill(0);
      //increment the coin type count
      for (coin of combination) {
        currentCoinCount[coins.indexOf(coin)]++;
      }
      //if this is a unique combination, record it in coinComparisons and push it to the solutions
      if (!coinComparisons.hasOwnProperty(currentCoinCount)) {
        coinComparisons[currentCoinCount] = 0;
        solutions.push([...combination]);
      }
    }
    if (target !== 0) {
      //iterate through coins
      for (coin in coins) {
        //if a coin can be used, choose it for this particular permutation
        if (target - coins[coin] >= 0) {
          //push the coin to the particular combination
          combination.push(coins[coin]);
          //make the next coin choices that fit with choosing this coin, limit the next coin choices to 
          //coins that are less than or equal of value to the current coin choice, which limits to solutions
          //that are in decreasing order
          let coinsCopy = coins.filter((currentCoin) => currentCoin <= coins[coin]);
          makeChange(target - coins[coin], coinsCopy, combination, solutions, coinComparisons);
          //after all possible permutations with choosing this coin, remove it from consideratoin
          combination.pop();
        }
      }
    }

    return solutions;
  }
  //get list of permutations
  let solutions = makeChange(target, coins);

  //if there were no possible solutions, return null
  if (solutions.length === 0 || target === 0) {
    return null;
  }
  //look for the solution with the smallest length, return it
  let smallest = solutions[0];
  for (let i = 1; i < solutions.length; i++) {
    if (solutions[i].length < smallest.length) {
      smallest = solutions[i];
    }
  }
  return smallest;


}


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = makeBetterChange
} catch (e) {
  module.exports = null;
}
