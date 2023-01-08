const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {  
  let word;
  let word2;
  beforeEach(()=>{
    word = new Word("xylophone");
    word2= new Word("caeioub");
  })

  describe("Word constructor function", function () {
    it('should have a "word" property', function () {
      expect(word).to.have.all.keys('word');
      expect(word2).to.have.all.keys("word");
    });
  
    it('should set the "word" property when a new word is created', function () {
      expect(word).to.not.equal(undefined);
      expect(word2).to.not.equal(undefined);
    });
  });

  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {
      expect(word.removeVowels()).to.equal("xylphn");
      expect(word2.removeVowels()).to.equal("cb");
    });

  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      expect(word.removeConsonants()).to.equal("ooe");
      expect(word2.removeConsonants()).to.equals("aeiou");
    });
  });
  
  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      expect(word.pigLatin()).to.equal("ophonexylay")
      expect(word2.pigLatin()).to.equal("aeioubcay");
      let word3 = new Word("ayo");
      expect(word3.pigLatin()).to.equal("ayoyay");
    });
  });
});
