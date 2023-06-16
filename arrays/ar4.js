input = [4,5,6]
console.log('Input:',input)
sum=0
output = []
 for(let num of input) {
    sum+=num
 }
 for(let num of input) {
    output.push(sum-num)
 }
 console.log('output:',output)
// output = [11,10,9]
