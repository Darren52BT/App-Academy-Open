const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

const Triangle = require("../problems/triangle.js")
const Scalene = require("../problems/scalene.js")

describe("Scalene class", ()=>{

    let scalene1;
    let scalene2;
    let scalene3;
    beforeEach(()=>{
        scalene1 = new Scalene(1,2,3);
        scalene2 = new Scalene(2,3,4);
        scalene3 = new Scalene(1,1,1);
    })
    it("should inherit from Triangle class", ()=>{
        expect(scalene1 instanceof Triangle).to.equal(true);
        expect(scalene2 instanceof Triangle).to.equal(true);
    });

    it("should have isValidtriangle prop with value derived from hasValidSideLengths", ()=>{
        expect(scalene1.isValidTriangle).equal(false);
        expect(scalene2.isValidTriangle).equal(true);
    });

    describe("isScalene()", ()=>{
        it("returns true if valid scalene triangle", ()=>{
            expect(scalene2.isScalene()).to.equal(true);            
            expect(scalene1.isScalene()).to.equal(true);

        });
        it("returns false if not valid scalene triangle", ()=>{
            expect(scalene3.isScalene()).to.equal(false);
        });
    });
    describe("validate()", ()=>{
        it("if valid scalene triangle, isValidScalene should be true", ()=>{
            scalene1.validate()
            scalene2.validate();
            expect(scalene1.isValidScalene).to.equal(true);
            expect(scalene2.isValidScalene).to.equal(true);
        });
        it("if not valid scalene triangle, isValidScalene should be false", ()=>{
            scalene3.validate();
            expect(scalene3.isValidScalene).to.equal(false);
        });

        it("should be overriding validate from Triangle class", ()=>{
            scalene3.validate();
            expect(scalene3.isValid).to.not.exist;
            expect(scalene3.isValidScalene).to.equal(false);
        })
    });
})
