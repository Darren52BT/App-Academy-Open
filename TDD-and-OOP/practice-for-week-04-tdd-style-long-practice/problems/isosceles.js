const Triangle = require("./triangle");
class Isosceles extends Triangle {
    constructor(side1, side2, side3) {
        super(side1, side2, side3);
        this.isValidTriangle = this.hasValidSideLengths();
    }

    isIsosceles = () => {
        function compare3(side1, side2, side3) {
            return side1 === side2 && side3 !== side1;
        }


        return compare3(this.side1, this.side2, this.side3) ||
            compare3(this.side1, this.side3, this.side2) ||
            compare3(this.side3, this.side2, this.side1)
    }

    validate = () => {
        this.isValidIsosceles = this.isIsosceles();
    }
}

module.exports = Isosceles;
