// Object

// var variable-name = {key:value}

var employee ={
    uname:'Max',
    id:1000,
    desg:'Developer',
    salary:40000,
    exp:2
}
console.log(employee['uname']);
console.log(employee.desg);

if('desg' in employee) {
    console.log('Present')
}
else {
    console.log('Not present')
}

employee['gender']='Male'
employee.isVacinated = true
employee.salary+=1000
console.log(employee)

