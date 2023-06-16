str = 'Hello'
// print all vowels
// console.log(Array.from(str))

vowels = ['a','e','i','o','u','A','E','I','O','U']
// strArr = Array.from(str)

// for(let char of strArr){
//     if(vowels.includes(char)){
//         console.log(char);
//     }
// }
console.log("Vowels are to be");
Array.from(str).filter(char => vowels.includes(char)).forEach(vowels => console.log(vowels))