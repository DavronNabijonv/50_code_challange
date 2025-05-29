// function checkString(str) {
//   // tekshirish  sharti
//   const unli = /[aeiou]/gi;
//   const undosh = /[bcdfghjklmnpqrstvxyzw]/gi;
//   const belgi = /[!@#$%^&*().,]/gi;
//   const raqam = /[1234567890]/gi;

//   // arrayga o`tkizish
//   const toStr = str.slice("");

//   // javob arraylar
//   const unliArr = toStr.match(unli) || [];
//   const undoshArr = toStr.match(undosh) || [];
//   const belgiArr = toStr.match(belgi) || [];
//   const raqamArr = toStr.match(raqam) || [];

//   return {
//     unli: unliArr.length,
//     undosh: undoshArr.length,
//     belgi: belgiArr.length,
//     raqamlar: raqamArr.length,
//   };
// }

// let nom = "nima gap 86997979!@@#@#$#adfvv%%^3@@";

// console.log(checkString(nom));



function createBox(arr) {
  
    const engKatta = arr.sort();
    console.log(engKatta);
    
    const zero = engKatta.filter(a=>a==0);
    const one = engKatta.filter(a=>a==1);
    const removedNumber = zero.length*2;
    const sumArr = engKatta.slice(removedNumber-1 , engKatta.length);
    console.log(sumArr);
    
    const engKattaSon = engKatta[engKatta.length-1];
    let c = 0;
     for(let s = 0 ; s<sumArr.length;s++){
        minus = engKattaSon - sumArr[s];
        c+=minus;
     }
     return c;
}

const arrNum = [4, 2, 0, 3, 2, 5];
const arrNum2 = [0,1,0,2,1,0,1,3,2,1,2,1]

console.log(createBox(arrNum))

console.log(createBox(arrNum2))
