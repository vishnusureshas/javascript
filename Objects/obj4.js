pattern = "ABAABBC"
// print first recursive character from the given string
// out=A
out ={}
flag=0
letters=pattern.split('')
console.log(letters);
for(let char of letters) {
    if( char in out) {
        flag++
      console.log('First recursive character is :',char);
      break;
    }else {
        out[char]=1
    }
}

if(flag == 0) {
    console.log('No repeated character in th given string');
}
