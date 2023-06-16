text = "hai hello hai hello world"
out ={}

//  {output will be hello:2 hai:2}

// words = text.split(" ")
// console.log(words)

// for(let word of words) {
//     if(word in out) {
//        out[word]+=1
//     }
//     else {
//         out[word] = 1
//     }
// }



text.split (' ').map(word => word in out? out[word]+=1:out[word] = 1)
console.log(out)