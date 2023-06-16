// spread operator ...

function add(...args) {
    console.log('Argument Method'); 
    return args.reduce((a,b) => a+b)
}

console.log(add(10,20,100,100));  