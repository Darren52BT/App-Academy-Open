const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, salary, title, manager = null, employees = []) {
        super(name, salary, title, manager);
        this.employees = employees;
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    _totalSubSalary() {
        let totalSubSalary = (employees) => {
            let subSum = 0;
            //if there are no employees left, return 0
            if (employees.length == 0) {
                return 0;
            }
            //if the current employee is an Employee
            //simply add its salary to subSum and make a recursive call on the rest of the employees
            if (employees[0].constructor.name === "Employee") {
                subSum += employees[0].salary + totalSubSalary(employees.slice(1));
            }
            //if the current employee is the manager
            //add the current employee's salary to subSum
            //make a recursive call to its own employees and another to the rest of the employees after this Manager
            //and add the results to subSum
            if (employees[0].constructor.name === "Manager") {
                subSum += employees[0].salary + totalSubSalary(employees[0].employees) + totalSubSalary(employees.slice(1));
            }
            return subSum;
        }

        return totalSubSalary(this.employees);
    }

    calculateBonus(multiplier) {
        let employeeSum = this._totalSubSalary(this.employees);
        return (this.salary + employeeSum) * multiplier;
    }
}

module.exports = Manager;
