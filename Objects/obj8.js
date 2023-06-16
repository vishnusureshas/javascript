accounts =[
    {
        acno:1000,ac_type:'savings',balance:45000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonepay'
            },
        ]
    },
    {
        acno:1001,ac_type:'current',balance:30000,transaction:[
            {
                to:1000,amount:1000,msg:'grossay',mode:'gpay'
            },
            {
                to:1002,amount:20000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonepay'
            },
        ]
    },
    {
        acno:1002,ac_type:'fixed',balance:100000,transaction:[
            {
                to:1000,amount:1000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:10000,msg:'recharge',mode:'phonepay'
            },
        ]
    },
    {
        acno:1003,ac_type:'savings',balance:30000,transaction:[
            {
                to:1000,amount:1000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonepay'
            },
        ]
    },
]

// 1.Total number of accounts
console.log('Total number of accounts',accounts.length);

// 2.print account number ac_type is savings
console.log('Account number ac_type is savings');
accounts.filter(data => data.ac_type == 'savings').forEach(item => console.log(item.acno))

// 3.print the balance of account number 1000
console.log('Print the balance of account number 1000 :',accounts.find(data => data.acno == 1000).balance)

//4.print all gpay transactions
console.log('gpay transactions');
accounts.map(item =>item.transaction).flat().filter(data=>data.mode=='gpay').forEach(item => console.log(item))

//5. print all transaction whose amount > 5000
console.log('Transaction whose amount > 5000');
accounts.map(item => item.transaction).flat().filter(data=>data.amount > 5000).forEach(item => console.log(item))

// 6.print credit transaction of account 1002
console.log('credit transaction of account 1002');
credit=accounts.map(item => item.transaction).flat().filter(data => data.to == 1002 )
console.log(credit);

// 7.print debit transaction of account 1002
console.log('debit transaction of account 1002');
debit = accounts.find(item =>item.acno == 1002).transaction
console.log(debit);

// 8.print transaction history of 1002
console.log('Transaction history :')
transactionHistory={
    credit:credit,
    debit:debit
}
console.log(transactionHistory);

// 9.print highest balance accout details
console.log('highest balance account' ,accounts.reduce((d1,d2) => d1.balance > d2.balance?d1:d2).acno);
  accounts.reduce((d1,d2) => d1.balance > d2.balance?d1:d2).acno

