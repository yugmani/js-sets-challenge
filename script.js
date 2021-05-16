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
function unionOfSets(setA, setB) {
  let unionAB = new Set(setA);
  for (let item of setB) {
    unionAB.add(item);
  }
  return unionAB;
}

//Author's Solution
// function unionOfSets(a, b) {
//   const result = new Set(a);
//   b.forEach(el => result.add(el));
//   return result;
// }

// Test Cases:
// console.log(unionOfSets(new Set('123'), new Set('234')));
// Expected new Set('1234')
// console.log(unionOfSets(new Set([1, 2, 3]), new Set([3, 4, 5])));
// Expected new Set([1, 2, 3, 4, 5])
console
  .log
  // unionOfSets(new Set([false, false, NaN]), new Set([true, true, NaN]))
  ();
// Expected new Set([false, NaN, true])

// ********************************************************
// 3. Get Intersection of two Javascript Sets
// ********************************************************

// Write a function that takes two sets, say setA and setB, as arguments
// Get the intersection of the sets
// In other words, return a set containing all elements that are both in setA as well as setB

//My Solution
// function intersectionOfSets(setA, setB) {
//   let intersectionAB = new Set();
//   for (let item of setB) {
//     if (setA.has(item)) {
//       intersectionAB.add(item);
//     }
//   }

//   return intersectionAB;
// }

//Author's Solution
function intersectionOfSets(setA, setB) {
  const int = new Set();
  setA.forEach(el => setB.has(el) && int.add(el));
  return int;
}

// Test Cases:
// console.log(intersectionOfSets(new Set([1, 2, 3]), new Set([4, 5, 6])));
// Expected new Set()
// console.log(intersectionOfSets(new Set('12345'), new Set([...'45678'])));
// Expected new Set('45')
// console.log(intersectionOfSets(new Set([1, 2, 3]), new Set([2, 3, 4])));
// Expected new Set([2, 3])

// ********************************************************
//4. Delete element from Set
// ********************************************************

// Write a function that takes a Set and a value as argument
// If existing in the Set, remove the value from the Set
// Return the result

//My Solution
function deleteElementFromSet(mySet, item) {
  if (mySet.has(item)) {
    mySet.delete(item);
  }
  return mySet;
}

// Test Cases:
// console.log(deleteElementFromSet(new Set([1, 2, 3]), 1));
// Expected new Set([2, 3])
// console.log(deleteElementFromSet(new Set('12345'), '3'));
// Expected new Set(['1', '2', '4', '5'])
// console.log(deleteElementFromSet(new Set([1, 2, 3]), 4));
// Expected new Set([1, 2, 3])

// ********************************************************
//5. Add multiple elements to Set
// ********************************************************

// Write a function that takes a Set and an array as arguments
// If not already existing, add each element in the array to the Set
// Return the modified Set

function addElementsIntoSet(mySet, myArray) {
  myArray.forEach(item => mySet.add(item));
  return mySet;
}

// Test Cases:
console.log(addElementsIntoSet(new Set([1, 2, 3]), [4, 5, 6]));
// Expected new Set([1, 2, 3, 4, 5, 6 ])
console.log(addElementsIntoSet(new Set('12345'), [...'6789']));
// Expected new Set([...'123456789'])
console.log(addElementsIntoSet(new Set([1, 2, 3]), [2, 3]));
// Expected new Set([1, 2, 3])

// ********************************************************
//1. Check if value is present in Set
// ********************************************************
