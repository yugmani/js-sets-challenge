// ********************************************************
//1. Check if value is present in Set
// ********************************************************

// Write a function that takes a Set and a value as arguments
// Check if the value is present in the Set

function isValuePresent(mySet, item) {
  return mySet.has(item);
}

// Test Cases:
// console.log(isValuePresent(new Set([1, 2, 3]), 2));
// Expected true
// console.log(isValuePresent(new Set([123]), 2));
// Expected false
// console.log(isValuePresent(new Set(['1', '2', '3']), '2'));
// Expected true
// console.log(isValuePresent(new Set('123'), '2'));
// Expected true

// ********************************************************
// 2. Convert a Set to Array
// ********************************************************

// Write a function that takes a Set as argument
// Convert the Set to an Array
// Return the Array

function setToArray(mySet) {
  return [...mySet];
}

// Test Cases:
console.log(setToArray(new Set([1, 2, 3])));
// Expected [1, 2, 3]
console.log(setToArray(new Set([123])));
// Expected [123]
console.log(setToArray(new Set(['1', '2', '3'])));
// Expected ['1', '2', '3']
console.log(setToArray(new Set('123')));
// Expected ['1', '2', '3']

// ********************************************************
//1. Check if value is present in Set
// ********************************************************

// ********************************************************
//1. Check if value is present in Set
// ********************************************************

// ********************************************************
//1. Check if value is present in Set
// ********************************************************

// ********************************************************
//1. Check if value is present in Set
// ********************************************************
