// Your code here
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  //instance method for introducing the instance
  introduce() {
    console.log(`Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`);
  }
  
  //static method for introducing an array of Person instances
  static introducePeople(people) {
    //checks if arg is array, throws error if not
    if (!Array.isArray(people)) {
      throw new Error("introducePeople only takes an array as an argument.");
    }
    //check if there are any non Person objects, if there are, throw an error
    for (let person of people) {
      if (!(person instanceof Person)) {
        throw new Error ('All items in array must be Person class instances.');
      }
    }
    //if the arg is an array full of Person objects, call introduce on all of them
    for (let person of people) {
      person.introduce();
    }
    return;
  }
}
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}
