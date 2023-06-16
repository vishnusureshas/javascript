// flat() - 

a=[
    [10,50],
    [20,70],
    [30,40],
    [1,60],
    [5,60]
]

1.// print all numbers>30
// console.log(a.flat().flat())
console.log (a.flat().filter(num=>num>30))

2.// print sqaures of all numbers
square = a.flat().map(num => num**2)
console.log("sqaures of all numbers",square)

3.// find total of all numbers
a.flat().reduce((n1,n2)=>n1+n2)
console.log(a.flat().reduce((n1,n2)=>n1+n2))

4.// print highest number
console.log(a.flat().reduce((n1,n2)=>n1>n2?n1:n2))