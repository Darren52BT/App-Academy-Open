/* ============================== Phase 1 ============================== */
/* -------------------------- exploring async -------------------------- */

// Your code here
function num1() {
  return 1;
}
async function num2() {
  return 2;
}

console.log("num1", num1());
console.log("num2", num2());
//num1 just returns number, num2 returns promise with number as value

num2().then((result) => console.log(result));

//async functions returns a Promise with the value being returned as the value of the promise

/* ============================== Phase 2 ============================== */
/* -------------------------- exploring await -------------------------- */

// Your code here

async function waiting() {
  const value = await num2();
  console.log("WAITING", value);
}
waiting();

//waits for num2 promise to resolve and get its value
//should print waiting 2

/* ============================== Phase 3 ============================== */
/* --------------------- creating a custom Promise --------------------- */

// Your code here

async function waitForMyPromise() {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("done!!!");
    }, 1000);
  });
  const result = await promise;
  console.log("my promise is", result);
}
waitForMyPromise();

//after one second, the promise should resolve and assign result 'done!!!'
//and print out my promise is done!!!
/* ============================== Phase 4 ============================== */
/* -------------------------- exploring then --------------------------- */

// Your code here

new Promise((resolve) => {
  setTimeout(() => {
    resolve("done!");
  }, 1500);
}).then((r) => console.log("then my other promise is", r));

//waits promise to resolve with value of 'done!' after 1.5 seconds, then print out 'then my other primose is done!'

/* ============================== Phase 5 ============================== */
/* ------------------- turn setTimeout into a Promise ------------------ */

// Your code here

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function bruh() {
  wait(2000)
  .then(() => console.log("hi"))
}
bruh()
/* ============================== Phase 6 ============================== */
/* -------------------- exploring reject and .catch -------------------- */

// Your code here

const tryRandomPromise = (random) => new Promise ((resolve, reject) =>{
    if( random > .5){
        resolve('success!!!');
    } else{
        reject('random error');
    }
})

//with arg of 1 I expect it to resolve with success value
//with arg of 0 I expect it to reject with reason of 'random error'

for ( let i = 1; i < 10; i ++){
    const random = Math.random();
    wait (2000 + random * 1000)
        .then(() => tryRandomPromise(random))
        .then(result => console.log('random try #', i, result))
        .catch(error => console.error('random try #', i, error))
}
//for 9 iterations, I expect for there to be a wait period in between 2 and 3 seconds,
//and it should randomly either log the success or error result
//should also appear in random order since there's no order to the wait duration as we progress through iterations

//errors should be showing before successes
//the reason being that if they are resulting in errors, then random is below .5, which means the wait period is below 2.5 seconds while the successes wait for longer than that
/* ============================== Phase 7 ============================== */
/* ---------------- exploring async/await and try/catch ---------------- */

// Your code here

const tryTryAgain = async (i) =>{
    const random = Math.random()
    
    await wait(3000 + random * 1000)

    try {
        const result = await tryRandomPromise(random)
        console.log('random again #', i, result);
    } catch (error){
        console.error('random again #', i, error)
    }
}

for (let i = 1; i < 10; i++){
    tryTryAgain(i)
}
//the same behavior should happen


/* ============================== Phase 8 ============================== */
/* -------------------- Promises are asynchronous! --------------------- */

console.log("END OF PROGRAM")
// Your code here
