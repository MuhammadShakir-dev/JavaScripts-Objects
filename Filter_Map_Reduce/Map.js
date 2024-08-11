// Write a function that takes an array of integers and returns a new array where each number is squared.
let aryOne = [1, 2, 3, 4];
let squaredNums = aryOne.map((nums) => { 
    return nums * nums
})
console.log(squaredNums);

// Given an array of strings, write a function that returns a new array with all strings converted to uppercase.
let aryTwo = ['John', 'Paul', 'George'];
let upperCaseArray = aryTwo.map((values) => { 
    return values.toUpperCase();
})
console.log(upperCaseArray);

// Given an array of objects representing people with properties firstName and lastName, write a function that returns an array of full names (i.e., firstName lastName).
let aryThree = [
    { firstName: 'John', lastName: 'Doe' },
    { firstName: 'Jane', lastName: 'Smith' }
];
let fullNames = aryThree.map((values) => { 
    return `${values.firstName} ${values.lastName}`
})
console.log(fullNames);

//  Write a function that takes an array of numbers and returns a new array where each number is converted to its string representation.
let aryFour = [1, 22, 333];
let stringCoversion = aryFour.map((values) => { 
    return values.toString()
})
console.log(stringCoversion);

// Write a function that takes an array of strings and returns a new array with the length of each string.
let aryFive = ['apple', 'banana', 'cherry'];
let findLength = aryFive.map((values) => { 
    return values.length
})
console.log(findLength);

//  Given an array of dates in the format 'YYYY-MM-DD', write a function that transforms each date into a more readable format 'MM/DD/YYYY'.
let arySix = ['2023-08-11', '2024-01-01'];

function transformDates(arySix) { 
    return arySix.map((values) => { 
        let [year, month, day] = values.split('-');
        return `${month}/${day}/${year}`
    })
}
console.log(transformDates(arySix));


// Write a function that takes an array of integers representing the number of elements, and returns a new array with each element being a random number between 1 and 100.
let arySeven = [5, 10, 11];
function generateRandomNums(arySeven) { 
    let randomNumOne = Math.floor(Math.random() * 100 + 1);
    return arySeven.map((values) => { 
        
    })
}

// methods chaining
let ary = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let updatedAry = ary
    .map((nums) => nums * 10)
    .map((nums) => nums + 1)
    .filter((nums) => nums >= 40)

console.log(updatedAry);
                