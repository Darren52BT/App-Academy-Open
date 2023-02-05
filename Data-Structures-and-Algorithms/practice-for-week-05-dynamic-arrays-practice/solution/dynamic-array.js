class DynamicArray {

  constructor(defaultSize=4) {

    // Your code here
    this.length = 0;
    this.capacity = defaultSize;
    this.data = new Array(defaultSize);


  }

  read(index) {

    // Your code here
    return this.data[index]
  }

  unshift(val) {

    //shifts each value to the right
    for (let i = this.length -1; i >= 0; i--){
      this.data[i+1] = this.data[i]
    }
    //sets the starting index element to be val
    this.data[0] = val;
    //increase length after
    this.length ++;
    
  }

}


module.exports = DynamicArray;
