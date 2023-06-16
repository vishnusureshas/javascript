// array creation

// const array-name = [item1,item2,item3...itemn]

var framework = ['express','angular','django',100]

console.log(framework)

// display no. of items inside an array

console.log('No. of items inside the array: ',framework.length)

// to access item onside an array - using its index number
// array-name[index-number]
console.log('First item :',framework[0])
console.log('Last item :',framework[framework.length-1])

// to add new item to an existing array - array-name.push (item)

framework.push(200)
console.log(framework)
// remove item from an array - pop()
framework.pop()
console.log(framework)

// print item one ny one from an array
console.log('using normal for-loop')
// using normal for-loop
for(i=0;i<framework.length;i++){
    console.log(framework[i])
}

// using for of
console.log('using for of')
for(let i of framework){
    console.log(i)
}

// using for in 
console.log('Using for in')
for(let i in framework){
    console.log(framework[i])
}

