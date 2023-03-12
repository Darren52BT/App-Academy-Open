class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable { // get O(1), set O(1), deleteKey O(1)

  constructor(numBuckets = 8) {
    // Initialize your buckets here
    // Your code here
    this.count = 0; 
    this.capacity = numBuckets;
    this.data = new Array(numBuckets);
    this.data.fill(null);
  }

  hash(key) {
    let hashValue = 0;

    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }

    return hashValue;
  }

  hashMod(key) {
    // Get index after hashing
    return this.hash(key) % this.capacity;
  }


  insert(key, value) {
    // Your code here
    //resize if load factor becomes .7 or higher
      if(this.count/this.capacity>= .7){
        this.resize();
      }
    let index = this.hashMod(key);

    //if there is no entry at this index, insert the pair 
    if(!this.data[index]){
      this.data[index] = new KeyValuePair(key, value);
    } else{ //otherwise, search through the linked list at this index to look for a matching key
      //if found, update the value at that pair
      let currentEntry = this.data[index];
      while(currentEntry){
        if(currentEntry.key === key){
          currentEntry.value = value;
          return;
        }
        currentEntry = currentEntry.next;
      }
      //at this point, there are no pairs with matching keys, so add the new pair to the front of the list
      let newEntry = new KeyValuePair(key, value);
      newEntry.next = this.data[index];
      this.data[index] = newEntry;
    }

    this.count++;
   
  }


  read(key) {
    // Your code here
    let index = this.hashMod(key);
    
    //search through linked list at index for matching key
      let currentEntry = this.data[index];
      while(currentEntry){
        //if found, return the value immediately
        if(currentEntry.key === key){
          return currentEntry.value;
        }
        currentEntry = currentEntry.next;
      }

      //return undefined if search fails or there is no entry at the index
      return;
    
  }


  resize() {
    // Your code here

    //create new hash table with double capacity
    let newHashTable = new HashTable(this.capacity*2);

    //iterate through old hash table
    this.data.forEach( (ele) =>{

      //insert each pair into the new hashtable
      let currentEntry = ele;
      while (currentEntry){
        newHashTable.insert(currentEntry.key, currentEntry.value);
        currentEntry = currentEntry.next;
      }
    });

    //set new hashtable's data to the current hashtable's data

    this.data = newHashTable.data;
    //double capacity
    this.capacity *=2;

  }


  delete(key) {
    
    //get index of key
    let index = this.hashMod(key);


    //search through linked list at this index for the pair with matching key, and delete it

    let currentEntry = this.data[index];
    //stores references to previous entry;
    let prevEntry = null;
    while (currentEntry){

      //if the current pair matches the key
      if(currentEntry.key === key){


        //if the previous entry is null, the current matching entry is the first entry
        //otherwise, it is not the first

        //if prevEntry is not null
        if(prevEntry){
          //remove the currentEntry from the linked list
          prevEntry.next = currentEntry.next;
        } else{ //otherwise we are at the first entry
          //so we make the index of the data array itself point to the next node after the currentEntry
          this.data[index] = currentEntry.next;
        }

        //decrement count once deletion has finished
        this.count--;
        return;
      }

      //update prevEntry and currentEntry to continue through the list
      prevEntry = currentEntry;
      currentEntry = currentEntry.next;
    }

    //if there was no key to be found to delete, return error
    return "Key not found";
  
  }
}


module.exports = HashTable;
