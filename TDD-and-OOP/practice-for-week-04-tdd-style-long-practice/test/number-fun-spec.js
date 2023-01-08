// Your code here
const expect = require("chai").expect
const returnsThree = require("../problems/number-fun.js").returnsThree;
const reciprocal = require("../problems/number-fun.js").reciprocal;

describe("returnsThree function", () => {
    it("should return 3", () => {
        expect(returnsThree()).to.equal(3);
    })
});

describe("reciprocal function", () => {
    describe("valid arguments", () => {

        it("should return reciprocal of number", () => {
            expect(reciprocal(2)).to.equal(.5);
            expect(reciprocal(8)).to.equal(.125);
            expect(reciprocal(5)).to.equal(.2);
            expect(reciprocal(999999)).to.equal(1 / 999999);
        });
    });

    describe("invalid arguments", () => {
        it("should only take numbers above 1", () => {
            expect(() => reciprocal(1)).to.throw(TypeError);
            expect(() => reciprocal(-9)).to.throw(TypeError);
        });
        it("should only take numbers below 1,000,000", () => {
            expect(() => reciprocal(1000000)).to.throw(TypeError);
            expect(() => reciprocal(2000000)).to.throw(TypeError);
        });
        it("should only take numbers", () => {
            expect(() => reciprocal(null)).to.throw(TypeError);
            expect(() => reciprocal("yo wassup")).to.throw(TypeError);
        });
    });
})
