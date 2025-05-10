//  Implement a function to group elements in an array based on a callback function

function groupBy (arr,callback ){
    return arr.reduce((acc,item)=>{
        const key = callback(item); // Get key based on callback function
        if(!acc[key]){
            acc[key] = [];
        }
        acc[key].push(item);
        return acc;
    },{});
};

// Exemple 1: Group numbers be even or odd
const numbers = [1,2,3,4,5,6,7,8,9,10];
const groupByEvenOdd = groupBy(numbers,(num)=>(num%2===0?"even":"odd"));
console.log(groupByEvenOdd);

// Exemple 2: Group words by their frist letter
const words = ["apple","banana","cherry","apricot","blueberry"];
const groupByFirstLetter = groupBy(words,(word)=>word[0]);
console.log(groupByFirstLetter);

// Exemple 3: Group people by age
const people = [
    {name:"ALice",age:25},
    {name:"Bob",age:30},
    {name:"Charlie",age:25},
    {name:"David",age:30}
];
const groupByAge = groupBy(people,(person)=>person.age);
console.log(groupByAge);