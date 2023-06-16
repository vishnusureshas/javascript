weatherData = [
    {district:'Thrissur',weather:32},
    {district:'Kottayam',weather:29},
    {district:'Palakkad',weather:34},
    {district:'Ernakulam',weather:33},
    {district:'Thrissur',weather:29},
    {district:'Kottayam',weather:30},
    {district:'Palakkad',weather:32},
    {district:'Ernakulam',weather:31}
]

// print district with its highest temperature

// output: {Thrissur:32, Kottayam:30,Palakkad:34,Ernakulam:33}

 //1. create output empty object
 output={}
 for (let record of weatherData) {
// 2.fetch district from array weatherData and assign to district
    distName = record["district"]
// 3.fetch weather from array weatherData and assign to curTemp
    curTemp = record["weather"]    
// 4.check district is present in output object
    if(distName in output) {
// 5.if yes then get newTemp from the record then compare it with curTemp
// update object value as it highest temperature   
    oldTemp=output[distName]
    if(oldTemp > curTemp) {
        output[distName] = oldTemp
    }
    else {
        output[distName] = curTemp
    }
    }else{
//6. if not present:add key as district and value as curTemp to object output        
        output[distName] = curTemp
    }
 }
//  7.display object output
 console.log(output);


