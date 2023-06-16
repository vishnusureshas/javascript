// print duplicates number from the given arrays

a1= [10,11,12,20,30]
a2=[11,20,21,30,31]
flag=0

for(let i of a1){
    for(let j of a2){
        if(i==j){
            flag+++
            console.log(i)
        }
    }
}
if(flag==0) {
    console.log('No duplicates present')
}