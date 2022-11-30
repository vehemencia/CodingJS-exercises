// Return true if the given string contains between 1 and 3 'e' chars.

function stringE(str){
  let totalEs = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'e') totalEs.push(str[i]);
  } return totalEs.length <= 3 && totalEs.length >= 1 ? true : false;
}