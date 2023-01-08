// Your code here
const expect = require("chai").expect;
const reverseString = require("../problems/reverse-string.js");
describe("reverseString function",()=>{
    it("words should get reversed", () =>{
        expect(reverseString("fun")).to.equal("nuf");
        expect(reverseString("")).to.equal("");
    });
    it("should throw error if given non-string", () =>{
        expect(() => reverseString(123)).to.throw(TypeError);
        expect(() => reverseString(null)).to.throw(TypeError);
    })
})
