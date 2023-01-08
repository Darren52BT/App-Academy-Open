const Person = require("../problems/person");

// Your code here
const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);
describe("Person class", () => {
    let bob;
    beforeEach(() => {
        bob = new Person("bob", 10);
    });

    it("Person instance should exist when instantiated", () => {
        expect(bob).to.exist;
    });
    it("Person class should have name and age properties that are set properly", () => {
        expect(bob.name).to.exist;
        expect(bob.age).to.exist;
        expect(bob.name).to.equal("bob");
        expect(bob.age).to.equal(10);
    });
    describe("sayHello()", () => {
        it("Person sayHello() method should return a string of instance's name and greeting message", () => {
            expect(bob.sayHello()).to.equal("yo wassup I'm bob")
        });
    });

    let erin;
    beforeEach(() => {
        erin = new Person("Erin", 9);
    });

    describe("visit(otherPerson)", () => {

        it("visit(otherPerson) should return string stating this instance visited the passed-in person instance", () => {
            expect(bob.visit(erin)).to.equal("bob visited Erin");
        });
    });

    describe("switchVisit(otherPerson)", () => {

        it("switchVisit(otherPerson) should invoke visit function of parameter, passing in current instance as argument", () => {
            const spy = chai.spy.on(erin, 'visit');
            expect(bob.switchVisit(erin)).to.equal("Erin visited bob");
            expect(spy).to.have.been.called.once;

        });
    });
    describe("update(obj)", () => {
        it("should update the current instance with the passed-in object's values", () => {
            let brian = new Person("brian", 2);
            brian.update({ name: "Charles", age: 3 });
            expect(brian.name).to.equal("Charles");
            expect(brian.age).to.equal(3);
        });
        it("if incoming arg is not an object, throw new TypeError with clear message", () => {
            expect(() => bob.update(2)).to.throw(TypeError);
            expect(() => bob.update(2)).to.throw("input needs to be an object");
        });
        it("if incoming arg is an object but does not have name or age properties, throw new TypeError with clear message", () => {
            expect(() => bob.update({ asbestos: 100 })).to.throw(TypeError);
            expect(() => bob.update({ asbestos: 100 })).to.throw("input needs to be an object with name and age properties");

            expect(() => bob.update({ name: 1 })).to.throw(TypeError);
            expect(() => bob.update({ name: 1 })).to.throw("input needs to be an object with name and age properties");

            expect(() => bob.update({ age: 2 })).to.throw(TypeError);
            expect(() => bob.update({ age: 2 })).to.throw("input needs to be an object with name and age properties");
        });
    });

    describe("tryUpdate(obj), called update(obj)", () => {
        it("should call update method", () => {
            const spy = chai.spy.on(bob, 'update');
            bob.tryUpdate(erin);
            expect(spy).to.have.been.called.once;
        })
        it("if successful and no error thrown, then true is returned (instance should be updated too)", () => {

            expect(bob.tryUpdate(erin)).to.equal(true);
            expect(bob.name).to.equal("Erin");
            expect(bob.age).to.equal(9);
        });
        it("if update is not successfully invoked, it should not throw an error but return false", () => {
            expect(bob.tryUpdate(2)).to.equal(false);
            expect(() => bob.tryUpdate(erin)).to.not.throw();
        });

    });

    describe("greetAll(obj)", () => {
        it("should take in array of Person instances and call the sayHello() method on each instance, returning the returned strings in an array", () => {
            const spy = chai.spy.on(erin, 'sayHello');
            const spy2 = chai.spy.on(bob, 'sayHello');
            expect(Person.greetAll([bob, erin]).toString()).to.equal(
                ["yo wassup I'm bob", "yo wassup I'm Erin"].toString()
            );
            expect(spy).to.have.been.called.once;
            expect(spy2).to.have.been.called.once;

        });
    })

});
