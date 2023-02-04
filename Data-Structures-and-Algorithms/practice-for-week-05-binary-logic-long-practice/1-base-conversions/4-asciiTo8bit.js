const addZeros = require('../utils/addZeros');

// Translate the ASCII strings in the console.logs below to 8-bit binary strings
// Implement the imported helper function addZeros()
//    Read the export file for the explanation of how it works

/******************************************************************************/


//converts decimal to binary
const convertDecToBin = number => {
  let binary = ""; //stores result of conversion
  while (number !== 0) { //while the number isn't 0
    number = number/2; //divide number by 2

    //if number has a remainder, add 1 to beginning of binary string and floor number
    if (number % 1 !== 0){
      binary = '1' + binary;
      number = Math.floor(number);
    } else{ //if no remainder, just add 0 to beginning of binary string
      binary = '0' + binary;
    }

  }


  return binary;
}
const asciiTo8bit = str => {
  // Your code here
  let result = "";
  for(let i = 0; i< str.length; i++){
    result+= addZeros(convertDecToBin(str.charCodeAt(i)), 8)
  }
  return result;
};
/******************************************************************************/

console.log(asciiTo8bit('123'));
// 001100010011001000110011

console.log(asciiTo8bit('ABC'));
// 010000010100001001000011

console.log(asciiTo8bit('Hello, world!'));
// 01001000011001010110110001101100011011110010110000100000011101110110111101110010011011000110010000100001
