// find duplicate elements

a=[10,20,40,50,11,12]

len=a.length
flag=0

for(i=0;i<len;i++){
    for(j=i+1;j<len;j++){
        if(a[i]==a[j]){
            flag++
            console.log(a[i])
        }
    }
}
if(flag==0){
    console.log('No duplicate')
}

// print pairs whose  sum=6
a=[2,3,4,5]

// for(let i of a){
//     for(let j of a){
//         if(i+j==6){
//             console.log(`${i},${j}`)
//         }
//     }
// }
len=a.length
for(i=0;i<len;i++){
    for(j=i+1;j<len;j++){
        if(a[i]+a[j]==6){
            console.log(`${a[i]},${a[j]}`)
        }
    }
}