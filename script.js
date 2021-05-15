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
// console.log(setToArray(new Set([1, 2, 3])));
// Expected [1, 2, 3]
// console.log(setToArray(new Set([123])));
// Expected [123]
// console.log(setToArray(new Set(['1', '2', '3'])));
// Expected ['1', '2', '3']
// console.log(setToArray(new Set('123')));
// Expected ['1', '2', '3']

// ********************************************************
//3. Get union of two sets
// ********************************************************
// Write a function that takes two Sets as arguments
// Create the union of the two sets
// Return the result
// Tipp: try not to switch to Arrays, this would slow down your code

//My Solution
// function unionOfSets(setA, setB) {
//   let unionAB = new Set(setA);
//   for (let item of setB) {
//     unionAB.add(item);
//   }
//   return unionAB;
// }

//Author's Solution
function unionOfSets(a, b) {
  const result = new Set(a);
  b.forEach(el => result.add(el));
  return result;
}

// Test Cases:
console.log('result1=', unionOfSets(new Set('123'), new Set('234')));
// Expected new Set('1234')
console.log('result2=', unionOfSets(new Set([1, 2, 3]), new Set([3, 4, 5])));
// Expected new Set([1, 2, 3, 4, 5])
console.log(
  'result3=',
  unionOfSets(new Set([false, false, NaN]), new Set([true, true, NaN]))
);
// Expected new Set([false, NaN, true])

// ********************************************************
//1. Check if value is present in Set
// ********************************************************

// ********************************************************
//1. Check if value is present in Set
// ********************************************************

// ********************************************************
//1. Check if value is present in Set
// ********************************************************
