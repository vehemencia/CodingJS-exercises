// Given a string, take the first 2 chars and return the string with the 2 chars added at both the front and back.
// 'kitten' yields 'kikittenki'

function front22(str){
  let firstTwo = str.slice(0,2)
  return firstTwo + str + firstTwo
}