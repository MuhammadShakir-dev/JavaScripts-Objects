// Write a function that filters out all odd numbers from an array of integers, leaving only even numbers.

const nums = [1, 2, 3, 4, 5, 6];
let oddsNums = nums.filter((items) => {
    return items % 2 === 0;
});
console.log(oddsNums);

// Given an array of strings, filter out all strings that have more than 5 characters.

const str = ['apple', 'banana', 'cherry', 'date'];
let longerThanFive = str.filter((items) => { 
    return items.length > 5
})
console.log(longerThanFive);

// Write a function that filters out all negative numbers from an array of integers.
const negNums = [-10, 20, -30, 40, -50];
const findingNegNums = negNums.filter((nums) => { 
    return nums < 0
})
console.log(findingNegNums);

// Given an array that contains various data types, filter out all falsey values 
const newStr = [0, 'Hello', false, 42, '', null, 'World', undefined, NaN];
const findFalsyValues = newStr.filter((items) => { 
    return !items
})
console.log(findFalsyValues);

// Write a function that filters out elements that are located at an odd index in an array.
const char = ['a', 'b', 'c', 'd', 'e'];
const oddIndexValues = char.filter((items, index) => { 
    return index % 2 === 0
})
console.log(oddIndexValues);