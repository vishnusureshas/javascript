// filter () - create a new array with items satisfy a condtion which is pass by a function

a =[10,11,12,13,14,15]
// print even numbers
for(let num of a){
    if(num%2==0){
        console.log(num)
    }
}

evenNum=a.filter(num=>num%2==0)
console.log(evenNum)

// print all numbers greater tha n 12
numS=a.filter(num=>num>12)
console.log("Numbers greater than 12 :",numS)