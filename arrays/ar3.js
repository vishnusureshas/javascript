var a = [10,11,12,12,4,15]
// no.4 is present or not
isPresent =  false
search = 2 
for (let num of a){
    if(num == search){
        isPresent =true
        break;
    }
}
console.log(isPresent?'number is present':'number is not present')