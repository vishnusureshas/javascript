// create a new array for calling a function 
// for every element inside that array

a= [10,11,12,13,14,15]
// print square of a;; elements
square=a.map(num=>num**2)
console.log(square)
// create an array with numbers ,if number>13 then increment number
// /else decrement number 
// output =[9,10,11,12,15,16]
newArray=a.map(num => num>13?num+1 : num-1)
console.log(newArray)
