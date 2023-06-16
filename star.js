// pattern printing
// ####
// ####
// ####
// ####
for(i=1;i<=4;i++){
    str=""
    for(j=1;j<=4;j++){
        str+="#"
    }
    console.log(str)
}

// print pattern
// *
// * *
// * * *
// * * * *
for(row=1;row<=4;row++){
    str=""
    for(col=1;col<=row;col++){
        str+="*"
    }
    console.log(str)
}

// pattern printing
// 1
// 1 2
// 1 2 3
// 1 2 3 4
for(row=1;row<=4;row++){
    str=""
    for(col=1;col<=row;col++){
        str+=col
    }
    console.log(str)
}

// pattern printing
//       *
//     *   *
//   *   *   *
// *   *    *  * 
for(row=1;row<=4;row++){
    str=" "
    for(space=4;space>row;space--){
        str+=" "
    }
    for(col=1;col<=row;col++){
        str+="* "
    }
    console.log(str)
}
