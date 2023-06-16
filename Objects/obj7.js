products = [
    {pid:100,pName:'apple',band:'5g',price:120000,display:'lcd'},
    {pid:101,pName:'samsaung',band:'5g',price:45000,display:'lcd'},
    {pid:102,pName:'blackberry',band:'4g',price:50000,display:'lcd'},
    {pid:103,pName:'nokia',band:'3g',price:1200,display:'lcd'},
    {pid:104,pName:'motorola',band:'4g',price:10000,display:'lcd'}
]

// 1.print product name only
console.log('Products name :');
products.forEach(item => console.log(item.pName))

// 2.print all mobile details whose display is lcd
console.log('All mobile details whose display is lcd :'); 
products.filter(item =>item.display == 'lcd').forEach(item => console.log(item.pName))

// 3.print 5g mobile phone name
console.log('Mobile with 5g');
products.filter(item =>item.band == '5g').forEach(item => console.log(item.pName))

// 4.filter mobile based on price
console.log('sort mobile based on price :');
products.sort((s1,s2) => s2.price-s1.price).forEach(item => console.log(item.pName))

// 5.print costly mobile
console.log('Costly mobile is:');
console.log(products.reduce((p1,p2) => p1.price > p2.price?p1:p2).pName)

// 6.print low cost mobile
console.log('Low cost Mobile :');
console.log(products.reduce((p1,p2) =>p1.price < p2.price?p1:p2).pName);