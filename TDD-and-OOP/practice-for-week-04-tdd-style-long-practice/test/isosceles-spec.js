const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

const Triangle = require("../problems/triangle.js")
const Isosceles = require("../problems/isosceles.js")

describe("Isosceles class", ()=>{

    let isosceles1;
    let isosceles2;
    let isosceles3;
    beforeEach(()=>{
        isosceles1 = new Isosceles(1,2,2);
        isosceles2 = new Isosceles(1,1,2);
        isosceles3 = new Isosceles(1,1,1);
    })
    it("should inherit from Triangle class", ()=>{
        expect(isosceles1 instanceof Triangle).to.equal(true);
        expect(isosceles2 instanceof Triangle).to.equal(true);
        expect(isosceles3 instanceof Triangle).to.equal(true);

    });

    it("should have isValidtriangle prop with value derived from hasValidSideLengths", ()=>{
        expect(isosceles1.isValidTriangle).equal(true);
        expect(isosceles2.isValidTriangle).equal(false);
        expect(isosceles3.isValidTriangle).equal(true);

    });

    describe("isIsosceles()", ()=>{
        it("returns true if valid isosceles triangle", ()=>{
            expect(isosceles2.isIsosceles()).to.equal(true);            
            expect(isosceles1.isIsosceles()).to.equal(true);

        });
        it("returns false if not valid isosceles triangle", ()=>{
            expect(isosceles3.isIsosceles()).to.equal(false);
        });
    });
    describe("validate()", ()=>{
        it("if valid isosceles triangle, isValidIsosceles should be true", ()=>{
            isosceles1.validate()
            isosceles2.validate();
            expect(isosceles1.isValidIsosceles).to.equal(true);
            expect(isosceles2.isValidIsosceles).to.equal(true);
        });
        it("if not valid isosceles triangle, isValidIsosceles should be false", ()=>{
            isosceles3.validate();
            expect(isosceles3.isValidIsosceles).to.equal(false);
        });

        it("should be overriding validate from Triangle class", ()=>{
            isosceles3.validate();
            expect(isosceles3.isValid).to.not.exist;
            expect(isosceles3.isValidIsosceles).to.equal(false);
        })
    });
})
