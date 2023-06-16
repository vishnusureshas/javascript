employee = [
    [1000,'Neel','developer','kochi',25000,3],
    [1001,'Max','tester','TVM',15000,2],
    [1002,'Maxwell','QA','kochi',35000,3],
    [1003,'Vyom','QA','kochi',45000,5],
    [1004,'Laisha','tester','TVM',55000,7],
    [1005,'Aahan','developer','TVM',15000,1],
    [1006,'Aahil','QA','kochi',15000,2],
    [1007,'Shayan','developer','kochi',30000,3],
    [1006,'Nihaan','developer','TVM',25000,3],   
]

// print employee with least salary
least=employee.reduceRight((emp1,emp2) => emp1[4]<emp2[4]?emp1:emp2)
console.log('employee with least salary',least)

// print employee with highest salary
highest = employee.reduceRight((emp1,emp2) => emp1[4]>emp2[4]?emp1:emp2)
console.log("employee with highest salary",highest)

// total salary
total = employee.map(emp=>emp[4]).reduce((sal1,sal2)=>sal1+sal2)
console.log('Total salary',total)

// print all employee name
empName=employee.map(emp=>emp[1])
console.log(empName)