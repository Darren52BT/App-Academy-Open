const [addNums, addManyNums] = require("./phase-1");

//console.time
// function addNums10Timing(increment) {
//   // Fill this in
//   let results = [];
//   console.time();
//   for (let i = increment; i <= increment * 10; i += increment) {
//     results.push(addNums(i))
//     console.timeLog();

//   }
//   console.timeEnd();
//   return results;
// }


// function addManyNums10Timing(increment) {
//   // Fill this in
//   console.time();
//   let results = [];
//   for (let i = increment; i <= increment * 10; i += increment) {
//     results.push(addManyNums(i));
//     console.timeLog();
//   }
//   console.timeEnd();
//   return results;
// }


function addNums10Timing(increment) {
  // Fill this in
  let results = [];
  for (let i = increment; i <= increment * 10; i += increment) {
    let start = Date.now();
    results.push(addNums(i))
    let end = Date.now();
    console.log(end - start);

  }
  return results;
}


function addManyNums10Timing(increment) {
  // Fill this in
  let results = [];
  for (let i = increment; i <= increment * 10; i += increment) {
    let start = Date.now();
    results.push(addManyNums(i));
    let end = Date.now();
    console.log(end - start);
  }
  return results;
}


n = 1000000
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log("\n***********\n");

n = 1000
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);
