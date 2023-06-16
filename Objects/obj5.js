a = [10,10,20,30,20,30,40,50,60,30,20,50,50]
out = {}

// output= {10:2,20:3,30:3,40:1,50:3,60:1}
for (let num of a){
    if(num in out) {
        out[num]+=1
    }else {
        out[num]=1
    }
}

console.log(out);