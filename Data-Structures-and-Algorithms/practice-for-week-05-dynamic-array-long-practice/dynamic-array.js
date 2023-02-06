class DynamicArray {

  constructor(defaultSize = 4) {

    // Your code here
    this.capacity = defaultSize;
    this.length = 0;
    this.data = new Array(defaultSize)
  }

  read(index) {

    // Your code here
    return this.data[index]
  }

  push(val) {

    //if the array is full, resize
    if (this.length === this.capacity) {
      this.resize();
    }
    //insert value at end
    this.data[this.length] = val;
    //increase length
    this.length++;

  }


  pop() {

    // save value to be popped
    let ele = this.data[this.length - 1]
    //pop value
    this.data[this.length - 1] = undefined;
    //if array is empty, don't decrease length
    if (this.length !== 0)
      this.length--;
    return ele;
  }

  shift() {

    // save element to be shifted off
    let ele = this.data[0];
    //overwrite the current index with the element in the next index
    for (let i = 0; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    this.data[this.length - 1] = undefined;

    //if array is empty, dont decrease length
    if (this.length !== 0)
      this.length--;
    return ele;

  }

  unshift(val) {
    //if array is full, resize
    if (this.length === this.capacity) {
      this.resize();
    }
    //shift values up an index
    for (let i = this.length - 1; i >= 0; i--) {
      this.data[i + 1] = this.data[i]
    }
    //add new value to beginning
    this.data[0] = val;
    this.length++;

  }

  indexOf(val) {
    //iterate through array, if value matches search value, return index
    for (let i = 0; i < this.length; i++) {
      if (this.data[i] === val) {
        return i;
      }
    }
    //if there were no matching elements just return -1
    return -1;

  }

  resize() {
    //create new array with length of current length + capacity
    let newArr = new Array(this.data.length + this.capacity);
    //set capacity to new length
    this.capacity = newArr.length;
    //copy old array to new array
    this.data.forEach((ele, index) => {
      newArr[index] = ele;
    })
    //set array to new array with updated length
    this.data = newArr;
  }

}


module.exports = DynamicArray;
