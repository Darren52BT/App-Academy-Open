// Your code here
Array.prototype.isEqual = function (arr) {
    return this.every((ele, index) => {
        return ele === arr[index]
    })
}


