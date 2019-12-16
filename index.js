// Your code here
// my own map-like methods
//     mapToNegativize returns an array with all values made negative
//       1) transforms correctly
//       mapToNoChange returns an array with the original values
//         2) transforms correctly
//       mapToDouble returns an array with the original values multiplied by 2
//         3) transforms correctly
//       mapToSquare returns an array with the original values squared
//         4) transforms correctly
//

function mapToNegativize(array){
  let n = []
  for (let i = 0; i < array.length; i++ ) {
    n.push(-1 * array[i])
  }
  return n;
}

function mapToNoChange(array){
  let n = []
  for (let i = 0; i < array.length; i++) {
    n.push(array[i])
  }
  return n;
}

function mapToDouble(array){
  let n = []
  for (let i = 0; i < array.length; i++) {
    n.push(2 * array[i])
  }
  return n;
}

function mapToSquare(array){
  let n = []
  for (let i = 0; i < array.length; i++) {
    n.push((array[i])*(array[i]))
  }
  return n;
}
// my own reduce-like methods
//    reduceToTotal returns a running total when not given a starting point
//      1) reduces correctly
//    reduceToTotal returns a running total when given a starting point
//      2) reduces correctly
//    reduceToAllTrue returns true when all values are truthy
//      3) reduces correctly
//    reduceToAllTrue returns false when any value is falsy
//      4) reduces correctly
//    reduceToAnyTrue returns true when a true value is present
//      5) reduces correctly
//    reduceToAnyTrue returns false when no true value is present
//      6) reduces correctly

function reduceToTotal(array, start=0){
  let sum = start
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i]
  }
  return sum
}

function reduceToAllTrue(array){
  for (let i = 0; i < array.length; i++ ) {
    if (!array[i]) return false
  }
  return true
}

function reduceToAnyTrue(array){
  for (let i = 0; i < array.length; i++ ) {
    if (array[i]) return true
  }
  return false
}
