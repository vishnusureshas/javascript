
// Sum of numbers
// i=1
// str=""
// sum=0

// total=0
// while(i<=input){
//     sum=sum*10+input
//     total+=sum
//     i++

// }
// console.log(total)

// display a number in reverse order
input=123
str=""
while(input>0){
    lastdigit=input%10
    str+=lastdigit
    input=Math.floor(input/10)
}
console.log("Output",str)