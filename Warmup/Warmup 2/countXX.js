// Count the number of 'xx' in the given string. We'll say that overlapping is allowed, so 'xxx' contains 2 'xx'.

function countXX(str) {
  let timesThatX = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] + str[i + 1] === 'xx') {
      timesThatX++
    }
  } return timesThatX
}