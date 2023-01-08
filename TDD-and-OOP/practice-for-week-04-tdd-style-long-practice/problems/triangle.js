// Your code here
class Triangle{
    constructor(side1, side2, side3){
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }

    getPerimeter = () =>{
        return this.side1 + this.side2 + this.side3;
    }

    hasValidSideLengths = () =>{
        let sum = this.getPerimeter();
        return sum-this.side1 > this.side1 && sum-this.side2 >this.side2 && sum-this.side3>this.side3;
    }
    validate = ()=>{
        this.isValid = this.hasValidSideLengths();
    }

    static getValidTriangles = (...triangles) =>{
        return triangles.filter((tri)=> tri.hasValidSideLengths());
    }
}






















module.exports = Triangle;
