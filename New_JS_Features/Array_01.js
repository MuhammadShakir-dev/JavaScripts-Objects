// findlast -  method looks at an array from the end and gives you the value of the first element thats meets a certain condition
let myArray = [1, 2, 3, 4, 5, 6, 7];
let lastNum = myArray.findLast((num) => num < 7) // 6
console.log(lastNum);

// findLastIndex - nethod that finds the position in the array of the last element that meets a certain condition
const num = [1, 2, 3, 4, 5, 6, 7];
let lastNumTwo = num.findLastIndex((num) => num > 5) // 6
console.log(lastNumTwo);

// toReversed - method that is used to saftely reverse an array without changing the original one.
const months = ['Jan', 'Feb', 'May', 'June'];
const reversed = months.toReversed();
console.log(reversed);

// toSorted - method that saftely sorted an array without changing the original one.
const newMonths = ['Jan', 'Feb', 'May', 'June'];
const sortedMonts = newMonths.toSorted();
console.log(sortedMonts);

// with - methods was intorduced as a safe way to udpate elements in an array without modifying the original array
const langs = ['HTML', 'CSS', 'JAVA'];
const myLangs = langs.with(2, 'JAVASCRIPT');
console.log(myLangs);