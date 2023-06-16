expenses = [10000,20000,30000,40000,50000]
// find total expense
total = 0

for (let amount of expenses) {
    total +=amount
}
console.log("Total amount is :",total)
// maximunm expense
maxExp = 0
for (let amount of expenses) {
    if(amount > maxExp){
        maxExp=amount
    }
}
console.log(maxExp)
// minimum expense
minExp = 10000
for (let amt of expenses){
    if(amt < minExp){
        minExp =amt
    }
}
console.log(minExp)

