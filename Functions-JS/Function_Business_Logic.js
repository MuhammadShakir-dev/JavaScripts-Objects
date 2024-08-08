// creates a function to calculate the sum of itmes in the cart.
const sumOfCartItems = (...Items) => { 
    let total = Items.reduce((acculmelator, currentValue) => acculmelator + currentValue, 0);
    return `Your total is Rs: ${total}`
}

console.log(sumOfCartItems(200, 300, 1299, 1499, 3200));


// using function with objects
const userOne = {
    username: "Muhammad Shakir",
    id : 77
}

const userCheck = (anyObject) => { 
    if (anyObject.hasOwnProperty('username') && anyObject.hasOwnProperty('id')) {
        return `${anyObject.username} has loggedIn with the id: ${anyObject.id} `
    } else { 
        return `Sorry we are unable to logged you In`
    }
}

console.log(userCheck(userOne));

// I can pas object when calling the funciton.
console.log(userCheck({
    username: "Saad Pasta",
    id : 69
}));

// Write a function to return the second last value from an array
let array = [100, 200, 300, 400];

const findSecondLastValue = (anyArray) => { 
    return anyArray[anyArray.length - 2];
}

console.log(findSecondLastValue(array));

