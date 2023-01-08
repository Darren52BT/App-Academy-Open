// Your code here
const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.spy();

const Triangle = require("../problems/triangle.js")

describe("Triangle class", () => {
    let triangle1;
    let triangle2;
    let triangle3;
    let triangle4;
    beforeEach(() => {
        triangle1 = new Triangle(1, 2, 3);
        triangle2 = new Triangle(1, 1, 1);
        triangle3 = new Triangle(100, 1, 1);
        triangle4 = new Triangle(2, 3, 2);

    });
    describe("constructor", () => {
        it("triangle class should exist", () => {
            expect(triangle1).to.exist;
        });

        it("should take the lengths of 3 sides and set them as properties of instance", () => {
            expect(triangle1.side1).to.exist;
            expect(triangle1.side2).to.exist;
            expect(triangle1.side3).to.exist;
            expect(triangle1.side1).to.equal(1);
            expect(triangle1.side2).to.equal(2);
            expect(triangle1.side3).to.equal(3);
        });
    });
    describe("getPerimeter()", () => {
        it("should return perimeter of Triangle instance", () => {
            expect(triangle1.getPerimeter()).to.equal(6);
            expect(triangle2.getPerimeter()).to.equal(3);
            expect(triangle3.getPerimeter()).to.equal(102);
            expect(triangle4.getPerimeter()).to.equal(7);
        });
    });
    describe("hasValidSideLengths()", () => {
        it("should return true if valid triangle", () => {
            expect(triangle2.hasValidSideLengths()).to.equal(true);
            expect(triangle4.hasValidSideLengths()).to.equal(true);

        });
        if ("shoudl return false if not valid triangle", () => {
            expect(triangle1.hasValidSideLengths()).to.equal(false);
            expect(triangle3.hasValidSideLengths()).to.equal(false);

        })
            describe("validate()", () => {

                it("should add isValid property with true value if valid triangle", () => {
                    triangle2.validate();
                    triangle4.validate();
                    expect(triangle2.isValid).to.equal(true);
                    expect(triangle4.isValid).to.equal(true);
                });
                it("should add isValid property with false value if invalid triangle", () => {
                    triangle1.validate();
                    triangle3.validate();
                    expect(triangle1.isValid).to.equal(false);
                    expect(triangle3.isValid).to.equal(false);
                });

            });
        describe("getValidTriangles()", () => {
            it("should take in arbitrary number of triangle instances and return all valid triangles", () => {
                expect(Triangle.getValidTriangles(triangle1, triangle2, triangle3, triangle4).toString()).to.equal([triangle2.toString(), triangle4.toString()].toString());
                expect(Triangle.getValidTriangles().toString()).to.equal([].toString());
            })
        });
    });
});
