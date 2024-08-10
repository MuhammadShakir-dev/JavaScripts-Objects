// for of loops
let ary = [1, 2, 3, 4, 5];
for (let nums of ary) { 
    // console.log(nums);
}

// loop over strings
let myName = "Muhammad Shakir";
for (let char of myName) { 
    // console.log(char);
}

// loop over Map
// The Map object holds key-value pairs and remembers the original insertion order of the keys. 
// Any value(both objects and primitive values) may be used as either a key or a value.

const map = new Map();
map.set('PK', 'Pakistan');
map.set('IND', 'India');
map.set('USA', 'United States of America');

// for (let keys of map) { 
//     console.log(keys); // But this is not the right way to print this.
// }

for (let [key, value] of map) { 
    console.log(`${key} :- ${value}`); // this is the right way
}