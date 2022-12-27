const Person = require('./person');

// Your code here
class Teacher extends Person{
  constructor(firstName, lastName, subject, years){
    super(firstName, lastName);
    this.subject = subject;
    this.yearsOfExperience = years;
  }
//return sum of the combined years of experience within teachers array
  static combinedYearsOfExperience(teachers){
    
    return teachers.reduce((sum, next)=>sum+next.yearsOfExperience, 0);
  }
}
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Teacher;
} catch {
  module.exports = null;
}
