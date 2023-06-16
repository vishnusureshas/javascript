// print pairs whose sum=6
a = [2,3,4,5]
flag = 0

len = a.length
for(i=0;i<a.len;i++) {
    for(j=i+1;a<len;j++) {
        if(a[i]+a[j]==10){
            console.log(`(${a[i]} ,${a[j]})`)
        }
    }
}

if(flag==0) {
    console.log('No duplicates')
}