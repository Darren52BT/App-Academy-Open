const sha256 = require('js-sha256');

class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {

  constructor(numBuckets = 4) {
    // Your code here
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(numBuckets);
    this.data.fill(null);
  }

  //converts hex string to decimal
  hexToDecimal(hex){
    let hexCode = hex.toLowerCase();

    let alphanums = {
      'a': 10,
      'b': 11,
      'c': 12,
      'd': 13,
      'e': 14, 
      'f': 15
    }

    let decimal = 0;
    for(let i = hexCode.length-1; i >=0; i --){
      if(alphanums.hasOwnProperty(hexCode[i])){
        decimal += alphanums[hexCode[i]] * 16**(7-i);
      } else{
        decimal+= Number(hexCode[i]) * 16**(7-i);
      }
    }
    return decimal;
  }


  hash(key) {
    // Your code here
    //gets first 8 characters of sha code
    let chars = sha256(key).substring(0,8);
    //feeds characters into hexToDecimal funciton and returns result
    return this.hexToDecimal(chars);
  }

  hashMod(key) {
    // Your code here
    //returns index by using modulus between the key hash and capacity length
    return this.hash(key)%this.capacity;
  }

  insertNoCollisions(key, value) {
    // Your code here
        //get hash index
    let index = this.hashMod(key);
    //if there isn't an entry, set it index to point to the keyvaluepair
    if(!this.data[index]){
      this.data[index] = new KeyValuePair(key, value);
      this.count++;
    } else{ //otherwise, throw the collision error
      throw Error("Thash collision or same key/value pair already exists!");
    }
  }

  insertWithHashCollisions(key, value) {
    // Your code here
    //get hash index
    let index = this.hashMod(key);
    //if there isn't an entry, set it index to point to the keyvaluepair
    if(!this.data[index]){
      this.data[index] = new KeyValuePair(key, value);
    } else{ //otherwise, add the new entry to the beginning of the linked list at this index
      let newEntry = new KeyValuePair(key, value);
      newEntry.next = this.data[index];
      this.data[index] = newEntry;
    }
    this.count++;

  }

  insert(key, value) {
    // Your code here
     //get hash index
     let index = this.hashMod(key);
     //if there isn't an entry, set it index to point to the keyvaluepair
     if(!this.data[index]){
       this.data[index] = new KeyValuePair(key, value);
     } else{ //otherwise, add the new entry to the beginning of the linked list at this index or update if the key already exists
       
        let currentEntry = this.data[index];

        //traverse through list to find matching key
        while(currentEntry ){
          //if there is a match, update value and exit
          if(currentEntry.key === key){
            currentEntry.value = value;
            return;
          }
          currentEntry = currentEntry.next;

        }
        
        //if there no pairs with matching keys, add the new pair to the head
          let newEntry = new KeyValuePair(key, value);
          newEntry.next = this.data[index];
          this.data[index] = newEntry;
        
     }
     //at this point a new entry has been added, so increment count;
     this.count++;
  }

}


module.exports = HashTable;
