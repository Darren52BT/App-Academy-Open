const Employee = require("./employee");
const Manager = require("./manager");

//Big Boss
const Hobbes = new Manager("Hobbes", 1000000, "Founder", null);

const Calvin = new Manager("Calvin", 130000, "Director", Hobbes);

const Susie = new Manager("Susie", 100000, "TA Manager", Calvin);

const Lily = new Employee("Lily", 90000, "TA", Susie);
const Clifford = new Employee("Clifford", 90000, "TA", Susie);

console.log(Hobbes.calculateBonus(.05));// 70500
console.log(Calvin.calculateBonus(.05));//20500
console.log(Susie.calculateBonus(.05));//14000
console.log(Lily.calculateBonus(.05));//4500
console.log(Clifford.calculateBonus(.05));//4500
