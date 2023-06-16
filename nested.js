// pattern printing
// 1111
// 2222
// 3333
// 4444
// for(row=1;row<=4;row++){
//     str=""
//     for(col=1;col<=4;col++){
//         str+=row
//     }
//     console.log(str);
// }

num1=12
num2=48
gcd=0

for(i=1;i<=num2;i++){
    if((num1%i==0) &&(num2%i==0)){
       gcd=i
    }
}
console.log(`HCF (${num1}, ${num2}) =${gcd}`)