var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray (arr, elly ) {
  
  var newArr = [elly, ...arr]
  return newArr
  
}

function destructivelyAddElementToBeginningOfArray(arr, elly) {
  
  return arr.unshift(elly)
  
}

function addElementToEndOfArray(arr, elly) {
  
  var newArr = [...arr, elly]
  return newArr
  
}

function destructivelyAddElementToEndOfArray(arr, elly) {
  
  return arr.push(elly)
  
}

function accessElementInArray(arr, ind) {
  
  return arr[ind]
  
}

function destrucivelyRemoveElementFromBeginningOfArray(arr) {
 
  return arr.shift()
  
}

function removeElementFromBeginningOfArray(arr) {
  
  var newArr = arr.slice(1)
  return newArr
  
}

function destructivelyRemoveElementFromEndOfArray(arr) {
  
  return arr.pop();
  
}

function removeElementFromEndOfArray(arr) {
  
  var newArr = arr.slice(0, arr.length - 2)
  return newArr
  
}
