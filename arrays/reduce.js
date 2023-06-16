// reduce() - Apply reduce function to get single result 
//and return a single value
a=[1,2,3,4,5,6,7] 

// total sum of numbers
total=a.reduce((n1,n2)=>n1+n2)
console.log('Total number of sum',total)

// smallest number
small=a.reduce((n1,n2)=> n1<n2?n1:n2)
console.log(small)

// highest number
large=a.reduce((n1,n2)=>n1>n2?n1:n2)
console.log(large)




