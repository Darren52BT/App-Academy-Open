// Convert the integers in the console.logs below to base 10:

/******************************************************************************/

const convertToBase10 = str => {
  // Your code here
  let base = str.substring(1, 2); //signifier for type of integer
  const integers = str.substring(2); //integers
  const integerLength = integers.length; //length of integers that determines exponent places
  let sum = 0; //result

  let hexalpha = {'a':10, 'b':11, 'c':12, 'd': 13, 'e': 14, 'f': 15} //stores corresponding values of hex numbers
  if (base === 'b') { //if binary, store base as 2
    base = 2;
  } else if (base === 'x') { //if hex, store base as 16
    base = 16;
  }
  //loop through line of integers from start to finish
  for (let i = 0; i < integerLength; i++) {
    let power = (integerLength - 1 - i); //calculate power based on current position and integerLength

    let currentInt = integers.substring(i, i+1); //get the integer at the current position
    if(hexalpha.hasOwnProperty(currentInt)){ //if the currentInt is a hex alpha character
      currentInt = hexalpha[currentInt] //get the corresponding int
    } else{
      currentInt = Number(currentInt) //if not an alpha character, just convert to number
    }

    sum += currentInt * base ** power; //add to the sum base on the current integer, base, and power


  }
  return sum;
};
module.exports = convertToBase10;

/******************************************************************************/

// console.log(convertToBase10('0b1100')); // 12
// console.log(convertToBase10('0b0101')); // 5
// console.log(convertToBase10('0b1000')); // 8
// console.log(convertToBase10('0b0111')); // 7

// console.log('––––––');

// console.log(convertToBase10('0b10100101')); // 165
// console.log(convertToBase10('0b11111111')); // 255
// console.log(convertToBase10('0b01010101')); // 85
// console.log(convertToBase10('0b00110011')); // 51

// console.log('––––––');

// console.log(convertToBase10('0xf')); // 15
// console.log(convertToBase10('0xfa')); // 250
// console.log(convertToBase10('0x1234')); // 4660
// console.log(convertToBase10('0xc9a1')); // 51617
// console.log(convertToBase10('0xbf12')); // 48914
