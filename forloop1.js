for(i=1;i<=10;i++){
    console.log(i)
}

// print numbers from 10 to 1
for(i=10;i>0;i--){
    console.log(i)
}

// factorial using for loop
num=4
fact=1
for(i=num;i>0;i--){
    fact*=i
}
console.log(`${num } != ${fact}`)

// break statement -to break a loop
for(i=1;i<=10;i++){
    if(i==5){
        break;
    }
    console.log(`inside the loop ${i}`)
}
console.log('Out of loop')

// pgm to check number is prime or not
// num=16 1x16 2x8 not a prime
num=3
prime=true
for(i=2;i<num;i++){
    if(num%i==0){
        prime=false;
        break;
    }
}
if(prime){
    console.log(` ${num} is a prime number`)
}else{
    console.log(`${num} is not a prime number`)
}