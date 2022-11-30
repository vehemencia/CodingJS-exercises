// Return true if the given string begins with 'mix', except the 'm' can be anything, so 'pix', '9ix' .. all count.

function mixStart(str) {
  return str.includes('ix', 1) ? true : false
}