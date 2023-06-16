var car = {
    cname:'Boleno',
    model:'hatch back',
    manufacturer:'maruti',
    price:100000
}

// print manufacturer
console.log(car['manufacturer'])

// check model is present in the car
if('model2' in car ){
    console.log('Model is present');
}else {
    console.log('Model is not present')
}

// add a new key as variant
car['Year'] =2019
car.variant = ['Manual']
car.variant.push('automatic')
console.log(car)