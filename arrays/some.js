// some() - apply where we have to return true or false
// [id,name,price,stock]

products = [
  [1,'hide and seek',50,20],
  [2,'lays',20,80],
  [3,'oreo',40,100],
  [4,'parle G',25,10],
  [5,'tiger',20,30],
  [6,'unibic',60,20],
  [7,'good day',70,20]
]

// is there any item can purchase by rs.10
isAvailable = products.some(item => item[2]<=30)
console.log('is there any item can purchase by rs.10',isAvailable?'Yes':'No')

// Is there any product with available  stock > 100
stock=products.some(item => item[3] > 100)
console.log('Products available by stoks greater than 100',stock?'Available':'Not available')

// Is there any product in the price range of 20 to 50
range=products.some(item => item[2]>=20 && item[2]<50)
console.log("Product in the range of 20 to 50 :",range?'Yes':'No')

// print all products in price range of 20 to 50
rangeFil = products.filter(item => item[2]>=20 && item[2]<50)
console.log('Result of all products in price range of 20 to 30 :',rangeFil)
rangeFil.forEach(item => console.log(item[1]))