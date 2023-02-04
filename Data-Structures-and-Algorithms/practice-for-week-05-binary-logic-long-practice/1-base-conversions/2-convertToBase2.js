// Convert the integers in the console.logs below to base 2

/******************************************************************************/

const convertToBase2 = element => {
  // Your code here

  // if it's a decimal number, use the convertDecToBin function
  if (typeof element === 'number'){
    return '0b' + convertDecToBin(element);
  }
//otherwise, it's a hex number
  let hexalpha = {'a':10, 'b':11, 'c':12, 'd': 13, 'e': 14, 'f': 15} //stores corresponding values of hex numbers

  let result = '0b';

  for(let i = 2; i < element.length; i++){

    let currentNum = element.substring(i, i+1);
    if(hexalpha.hasOwnProperty(currentNum)){ //if the current number is an alpha character
      currentNum = hexalpha[currentNum] //get the corresponding decimal number
    } else{ //otherwise, convert the string to Number
      currentNum = Number(currentNum);
    }

    //convert resulting decimal number to binary and add it to result;
    let currentConversion = convertDecToBin(currentNum);
    //binary version of hex is 4 digits in length, so if the current conversion has a length of less than 4
    //we must add the missing number of 0s to beginning
    let numOfMissingZeros = 4 - currentConversion.length;
    if(numOfMissingZeros !== 0){
      for(let i = 0; i < numOfMissingZeros; i++ ){
        currentConversion = '0' + currentConversion;
      }
    }
    result += currentConversion;
    
  }

return result;
};

//converts base 10 to binary
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

/******************************************************************************/

console.log(convertToBase2(4)); // 0b100
console.log(convertToBase2(65)); // 0b1000001
console.log(convertToBase2(256)); // 0b100000000
console.log(convertToBase2(123)); // 0b1111011
console.log(convertToBase2(1000)); // 0b1111101000

console.log('––––––');

console.log(convertToBase2('0xf')); // 0b1111
console.log(convertToBase2('0xfa')); // 0b11111010
console.log(convertToBase2('0x1234')); // 0b1001000110100
console.log(convertToBase2('0xc9a1')); // 0b1100100110100001
console.log(convertToBase2('0xbf12')); // 0b1011111100010010
