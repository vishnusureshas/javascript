// add sum with function
function add(num1,num2){
    result =num1+num2
    console.log(result)
    return result
}
console.log("Sum of two numbers")
add(50,50)
console.log(`addition result is ${add(50,50)}`)

// find cube with function
function cube(num){
    result =num**3
    return result
}
console.log(`Cube is ${cube(2)}`)

// check a function number is  odd or even
function  numcheck(num){
    // return num==0?'zero':num%2==0?'zero':'odd'
    if(num==0){
        return 'zero'
    }
     else if(num%2==0){
        return 'even'
     }
     else{
        return 'odd'
     }
    
}
console.log(numcheck(9))

// pgm to find super substraction of 2 numbers

function sub(n1,n2){
     return n1>n2?n1-n2:n2-n1
}
console.log(sub(10,20))

// pgm to print phone no. is valid or not
function check(mobile){
   return mobile.length==10?'valid':'not valid'
}
console.log(check('90613878401'))

// pgm to print to validate gmail
function validateEmail(email){
    return email.endsWith('@gmail.com')?'valid':'not valid'
}
console.log(validateEmail('xyz@gmail.com'))

// check a word start with A or a not

function startWith(word){
    return word[0]=='a' || word[0]=='A'?'start with a/A':'Not start with A or a'
}
console.log(startWith('A'))