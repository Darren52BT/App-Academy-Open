// Convert the integers in the console.logs below to base 16:

/******************************************************************************/

const convertToBase16 = element => {
  // Your code here


  return '0x' + convertDectoHex(element)
};

//coverts decimal to hex
const convertDectoHex = number => {
  let hex = '';
  let hexalpha = { 10: 'a', 11: 'b', 12: 'c', 13: 'd', 14: 'e', 15: 'f' }
  while (number !== 0) { //while number isn't 0
    let remainder = number % 16; //get remainder of dividing by 16

    let currentHex;
    //if remainder exists
    if (remainder !== 0) {
      if (hexalpha.hasOwnProperty(remainder)) { // if it is larger than 9, it is a hex alphacharacter
        currentHex = hexalpha[remainder];
      } else { //otherwise, the current hex can be the number itself
        currentHex = String(remainder);
      }
    } else{ //if there is no remainder, then currrent hex is 0
      currentHex = '0';
    }
    //add current hex to beginning of hex string
    hex = currentHex + hex;
    //divide number by 16 and floor
    number = Math.floor(number / 16);

  }
  return hex;
}

/******************************************************************************/

console.log(convertToBase16(4)); // 0x4
console.log(convertToBase16(65)); // 0x41
console.log(convertToBase16(256)); // 0x100
console.log(convertToBase16(123)); // 0x7b
console.log(convertToBase16(1000)); // 0x3e8

console.log('––––––');

console.log(convertToBase16('0b1100')); // 0xc
console.log(convertToBase16('0b0101')); // 0x5
console.log(convertToBase16('0b1000')); // 0x8
console.log(convertToBase16('0b0111')); // 0x7

console.log('––––––');

console.log(convertToBase16('0b10100101')); // 0xa5
console.log(convertToBase16('0b11111111')); // 0xff
console.log(convertToBase16('0b01010101')); // 0x55
console.log(convertToBase16('0b00110011')); // 0x33
