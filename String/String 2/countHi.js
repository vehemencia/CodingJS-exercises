// Return the number of times that the string "hi" appears anywhere in the given string.

function countHi(str){
  let ourHiArray = [];
  for (let i = 0; i < str.length; i++){
    if (str[i] + str[i+1] === 'hi') {
     ourHiArray.push(str[i]);
    }
  }
  return ourHiArray.length;
}