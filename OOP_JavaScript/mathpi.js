const User = {
    name: "Shakir",
    location: 'Los Santos',
    isAvaliable: true,

    greeting: function () { 
        console.log(`Hello ${this.name}`);
    }
}


// Now i dont want the property name to be itterable
console.log(Object.getOwnPropertyDescriptor(User, "location"));

// to stop if from itteration
Object.defineProperty(User, 'location', {
    enumerable: false,
})

// print this object using for of loop
for (let [key, value] of Object.entries(User)) { 
    if (typeof value !== 'function') { 
        console.log(`${key} : ${value}`);
    }
}
