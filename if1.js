// check whether a eligible for vote
age=17
if(age>=18){
    console.log("Eligible for vote")
}
else {
    console.log("Not eligible for vote")
}

// check a number is +ve or -ve
num=-2
if(num>0){
    console.log("Number is positive")
}else{
    console.log("Number is negative")
}

// To check whether largest amoung to numbers

num1=40
num2=40
if(num1>num2){
    console.log("Num1 is greater:",num1)
}
else if(num1>num2){
    console.log("Num2 is greater:",num2)
}
else{
  console.log("They are eqaul")
}
// ternary operator
num1>num2?console.log("Num1 is greater:",num1):num2>num1?console.log("Num1 is greater:",num2):  console.log("They are eqaul")

// to print 'fizz' if number/3, print 'buzz' if number/5, print 'fizzbuzz' if number/15
m=45
if(m%15==0){
    console.log('fizzbuzz')
}
else if(m%5==0){
    console.log('buzz')
}
else if(m%3==0){
    console.log('fizzbuzz')
}
else{
    console.log("Nothing to print")
}