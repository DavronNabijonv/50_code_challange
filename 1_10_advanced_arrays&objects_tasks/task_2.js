// Implement deep cloning of object ( without 'JSON.parse(JSON.stringify() )).

function cloneFunction(cloneStr) {
  const curly_index = {
    "{": Number,
    "}": Number,
  };

  const colonIndexArray = [];
  const commaIndexArray = [];

  const clone_obj = {};

  for (let i = 0; i < cloneStr.length; i++) {
    if (cloneStr[i] === "{") {
      curly_index["{"] = i;
    } else if (cloneStr[i] === "}") {
      curly_index["}"] = i;
    } else if (cloneStr[i] === ":") {
      colonIndexArray.push(i);
    } else if (cloneStr[i] === ",") {
      commaIndexArray.push(i);
    }
  }


  for (let g = 0; g < colonIndexArray.length; g++) {

    if(g == 0){

        clone_obj[cloneStr.slice(curly_index["{"] + 1 , colonIndexArray[0])] =
        cloneStr.slice(colonIndexArray[0]+1, commaIndexArray[0])

    }else if(g == colonIndexArray.length - 1){

        clone_obj[
            cloneStr.slice(
              commaIndexArray[g - 1],
              colonIndexArray[g]
            )
          ] = cloneStr.slice(colonIndexArray[g] + 1, curly_index['}'] ) 

    }else{

        clone_obj[cloneStr.slice(commaIndexArray[g-1]+1,
            colonIndexArray[g])] = cloneStr.slice(colonIndexArray[g]+1,commaIndexArray[g]); 
    }
  }

  return clone_obj;
}

const json = '{"result":true, "count":42,"bool":false, "num":100,"name":Davron,"age":22}';

console.log(cloneFunction(json));
