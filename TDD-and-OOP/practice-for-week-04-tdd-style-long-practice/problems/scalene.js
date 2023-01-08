const Triangle = require("./triangle");
class Scalene extends Triangle{
        constructor(side1, side2,side3){
            super(side1,side2, side3);
            this.isValidTriangle = this.hasValidSideLengths();
        }

        isScalene = () => {
            return this.side1 !== this.side2 && this.side1 !==this.side3 && this.side2 !== this.side3 
        }

        validate = ()=>{
            this.isValidScalene = this.isScalene();
        }   
}

module.exports = Scalene;
