/* Given a string, return a new string where "not " has been added to the front. 
However, if the string already begins with "not", return the string unchanged. */

function notString(str){
  if (str[0] === 'n' && str[1] === 'o' && str[2] === 't') {
    return str;
  } else return `not ${str}`;
}