/* Given a string and a non-negative int n, we'll say that the front of the string is the first 3 chars, 
or whatever is there if the string is less than length 3. 
Return n copies of the front. */

function frontTimes(str, n){
  if (str.length > 3){
    return (str[0]+str[1]+str[2]).repeat(n);
  } else {
    return str.repeat(n);
  }
}