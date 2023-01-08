class Person {
  // Your code here
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello = () => `yo wassup I'm ${this.name}`;

  visit = (otherPerson) => `${this.name} visited ${otherPerson.name}`;

  switchVisit = (otherPerson) => otherPerson.visit(this);

  update = (obj) => {
    if (!(obj instanceof Object)) {
      throw TypeError("input needs to be an object");
    } else if (!Object.keys(obj).includes('age') || !Object.keys(obj).includes('name')) {
      throw TypeError("input needs to be an object with name and age properties")
    }
    this.name = obj.name;
    this.age = obj.age;
  }

  tryUpdate = (obj) => {
    try {
      this.update(obj);
      return true;

    } catch (error) {
      return false;
    }

  }

  static greetAll = (obj) => {
    return obj.map((ele) => ele.sayHello());
  }
}

module.exports = Person;
