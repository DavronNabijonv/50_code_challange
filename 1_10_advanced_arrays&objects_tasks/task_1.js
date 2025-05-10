// flatten a deeply nested array (without using .flat())

const result = []
const newArray = [];
function flatFunction (arr){

    arr.forEach(element => {
        if(Array.isArray(element)){
            result.push(...flatFunction(element))
        }else{
            result.push(element)
        }
    });

    for(let i = 0 ; i < arr.length;i++){
        console.log('salom')
        if( Array.isArray(arr[i])){
            flatFunction(arr[i]);
        }else{
            newArray.push(arr[i]);
        }
    }

    return newArray;
}

const check_arr = [1,2,3,4,5,[6,7,[8,9]]]

console.log(flatFunction(check_arr));