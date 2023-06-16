// class
class Employee{
    // properties

    // functions
    setEmployee(empName,age,gender,salary) {
         this.eName = empName,
         this.age = age,
         this.gender = gender,
         this.salary = salary
    }

    printEmployee() {
        console.log(
            `Employee name: ${this.eName}
Employee age: ${this.age}
Employee gender: ${this.gender}
Employee salary: ${this.salary}
            `
        );
    }
} 

// object-1
var emp = new Employee()
emp.setEmployee('Max',23,'M',30000)
emp.printEmployee()

// object-2
var emp1 = new Employee()
emp1.setEmployee('Maxwell',25,'M',40000)
emp1.printEmployee()