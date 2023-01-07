// 1.
function sum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

try {
  let res = sum(null);
  console.log(res);
} catch (error) {
  if (error instanceof TypeError) {
    console.log("Needs an array of numbers");
  }
}
// 2.
// tests
let sayName = (name) => {
  if (typeof name !== 'string') {
    throw TypeError("invalid name! Must be a string!")
  }
  console.log(name);
}
try {
  sayName("Alex");
  sayName(1);
} catch (error) {
  console.log(error.message);
}



// 3.
function greet(greeting) {
  if (!greeting) {
    throw new Error("There was no greeting given.");
  }

  console.log(greeting);
}
try {
  greet(false);
} catch (e) {
  console.log("Hello World!")
}
