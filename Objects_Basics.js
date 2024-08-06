// Creating objects.

// Using Objects Literals.
const JSUser = {
    name: "Shakir",
    "user name": "MuhammadShakir-dev",
    isLoggedIn: true,
    contributions: 2590
}

// console.log(JSUser);

// Using singleton or constructor.
function JSUser2(name,username,isLoggedIn,contributions) { 
    this.name = name;
    this.username = username;
    this.isLoggedIn = isLoggedIn;
    this.contributions = contributions;
}

const person1 = new JSUser2("Saad Pasta", "SaadPasta-dev", true, "10k");
// console.log(person1);

// To access Object keys.
console.log(JSUser.name);
console.log(JSUser["user name"]); // not access by . you have to use [""] this syntax


// To lock or freez an object.
// Object.freeze(JSUser);
JSUser.age = 24;
console.log(JSUser); // age is not included



// Declearing Symbols and use Symbol as a key in your Object
const newSymbol = Symbol("Repo created");

const newUser = {
    name: "Shakir",
    age: 24,
    country: "Pakistan",
    [newSymbol]: "150 Repos"
}

console.log(newUser);


// Creating function inside of a Object

const calucator = {
    add: function (num1, num2) { 
        return num1 + num2
    },

    subtract: function (num1, num2) { 
        return num1 - num2
    },

    multiply: function (num1, num2) { 
        return num1 * num2
    },
}

console.log(calucator.add(12, 12));
console.log(calucator.subtract(120, 98));
console.log(calucator.multiply(12, 12));


// use of this keyword in objects : This refer to the current context

const myNewUser = {
    name: "Muhammad Shakir",
    greetings: function () { 
        return `Hello ${this.name}! Welcome to JS World`;
    }
}

console.log(myNewUser.greetings());