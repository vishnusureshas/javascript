// proto type inheritance

baleno = {
    company:'maruti',
    variants:['manuel','automatic'],
    color:['red','white','blue']
}

glanca = {
    company:'toyota',  
}

glanca.__proto__= baleno
console.log(glanca.variants);