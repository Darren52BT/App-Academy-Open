function returnsThree() {
  // Your code here
  return 3;
}

function reciprocal(n) {
  // Your code here
  if(typeof n !== 'number'){
    throw TypeError("needs to be a number")
  }
  if(n <=1 || n >= 1000000){
    throw TypeError("needs to be in between 1 and 1 million")
  }
  return 1/n;
}

module.exports = {
  returnsThree,
  reciprocal
};
