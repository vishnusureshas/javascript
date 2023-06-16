// name ,grade,gender,dept
class Student {
    // properties
    // functions
    constructor(studName,age,gender,dept) {
       this.sName = studName,
       this.age = age,
       this.gender = gender,
       this.dept = dept
    }

    printStudent() {
       console.log(`Student name : ${this.sName}
Student age : ${this.age}
Student gender : ${this.gender}
Department of student :  ${this.dept}
       `
       );
    }
}

// object1
var stud = new Student('Vishnu',23,'M','Compuer science')
// stud.setStudent('Vishnu',23,'M','Compuer science')
stud.printStudent()

// object2
var stud1 = new Student('Jasil',22,'M','BCA')
// stud1.setStudent('Jasil',22,'M','BCA')
stud1.printStudent()
