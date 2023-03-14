function ageSort(users) {
  // Your code here

  return users.sort( (a,b) =>{
    return a.age - b.age;
  })
}

function oddEvenSort(arr) {
  return arr.sort( (a,b) =>{

    if(a%2===1 && b%2===0) return -1
    if(a%2===0 && b%2===1) return 1;
    return a - b;
  })
}

function validAnagrams(s, t) {
  // Your code here

  let sSort = s.split("").sort();
  let tSort = t.split("").sort();
  return sSort.every( (ele, index) => ele === tSort[index])
}

function reverseBaseSort(arr) {
  // Your code here

  return arr.sort( (a,b)=>{
    
    let aBase = 0;
    let bBase = 0;
    
    let aCopy = a;
    let bCopy = b;

    while(aCopy > 0){
      aCopy = Math.floor(aCopy/10)
      aBase++;
    }
    while(bCopy > 0){
      bCopy = Math.floor(bCopy/10)
      bBase++;
    }

    if(aBase - bBase< 0) return 1;
     else if(aBase - bBase > 0) return -1;
     else return a - b;


  })
}

function frequencySort(arr) {
  // Your code here
  let obj = {};

  arr.forEach( ele => {
    if (!obj.hasOwnProperty(ele )){
      obj[ele] = 1;
    } 
    else{
      obj[ele]++;
    }
  })


  return arr.sort( (a,b) =>{
    
    if(obj[a] === obj[b] ){
      return b - a;
    }
    return obj[a] - obj[b]
  })

}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
