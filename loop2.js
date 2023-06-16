// pgm to print factorial of a number =4

// num=4
// fact=1

// while(num>0){
//     fact*=num
//     num--
// }
// console.log(fact)

// pgm to print number is armstrong or not
input=151
num=input
sum=0
while(num>0){
    lastdigit=num%10
    sum+=lastdigit**3
    num=Math.floor(num/10)
}
if(input==sum){
    console.log(input,"Armstrong number")
}else{
    console.log(input,"Not an armstrong number ")
}

// power=2 check 8<=number^2=36 then print the number
power=2
low=8
upper=36

i=1
while(i<=upper){
    result =i**power
    if(result>=low && result<=upper){
        console.log(i)
    }
    i++
}


