// Given a string, if the string "del" appears starting at index 1, return a string where that "del" has been deleted.
// Otherwise, return the string unchang

function delDel(str){
  if (str.charAt(1) === 'd' && str.charAt(2) === 'e' && str.charAt(3) === 'l') {
    return str.slice(0,1) + str.slice(4,str.length)
  } else return str;
}