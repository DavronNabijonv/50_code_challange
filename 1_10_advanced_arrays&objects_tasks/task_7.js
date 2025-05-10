
// write a function that converts an arrayof objects into a nested object based on a key. 

function getArray(obj){

    const ReturnObj = {}
    for(let s in obj){
        if(Array.isArray(obj[s])){
            console.log(obj[s])
            ReturnObj[s] = obj[s]
        }
    }

    const arrGRp = Object.keys(obj);
    const valueGrp = Object.values(obj);
    // const allArrgrp = valueGrp.filter((index)=>typeof index == Array);
    // console.log(valueGrp);
    // console.log(allArrgrp);
    
    
    return ReturnObj;
}

const objKey = {
    sal:[],
    2:['salom',1,2,false,null,undefined,'xayr'],
    3:'nima gap',
    ss:true,
    rr:null,
    dd:[1],
    ff:undefined
}

console.log(getArray(objKey));

console.log([1,2,3]+[4,5])