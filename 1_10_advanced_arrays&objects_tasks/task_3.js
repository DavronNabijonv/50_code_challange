// write a function that removes duplicate objects from an array based on a property. 

function removeDouble(arr){

    for(let i = 0; i<arr.length;i++){
        for(let g = i+1 ; g<arr.length;g++){
            if(arr[i] == arr[g]){
                delete arr[i];
            }
        }
    }

    arr = arr.filter(num => num !=undefined)

    return arr;
}

const check_Array = [1,2,1,2,3]

console.log(removeDouble(check_Array));  