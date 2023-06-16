// binary search
var a = [10,11,12,13,4,15]
search = 49
// console.log('before sorting')
// console.log(a)

// console.log('after sorting')
// console.log(a)
low=0
up=a.length-1
flag=0
counter=0

a.sort((a,b)=>a-b)

while(low<up) {
    counter++
mid=Math.floor((low +up)/2)
if(search==a[mid]) {
    console.log("Number found");
    flag=1
    break;
}
else if(search > a[mid]) {
    low=mid+1
}
else if (search < a[mid]) {
    up=mid
}
}
console.log('Total iteration', counter)
console.log(flag==0?'not found':'found')

