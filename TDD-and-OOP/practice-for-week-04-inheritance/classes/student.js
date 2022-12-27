const Person = require('./person');

// Your code here
class Student extends Person{
  constructor(firstName, lastName, major,gpa){
    super(firstName, lastName);
    this.major= major;
    this.GPA = gpa;
  }

  //static method comparing GPAs of two students
  static compareGPA(student1, student2){
    if(student1.GPA > student2.GPA){
      return `${student1.firstName} ${student1.lastName} has the higher GPA.`;
    } else if (student1.GPA < student2.GPA){
      return `${student2.firstName} ${student2.lastName} has the higher GPA.`;
    } else{
      return "Both students have the same GPA";
    }
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Student;
} catch {
  module.exports = null;
}