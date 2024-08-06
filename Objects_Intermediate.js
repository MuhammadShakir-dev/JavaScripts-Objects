// Creating objects with constructros
const userOne = new Object();
userOne.name = "Muhammad Shakir";
userOne.userName = "MuhammadShakir-dev";
userOne.role = "Software Engineer";

// console.log(userOne);

const userTwo = new Object();
userTwo.fullname = "SaadPasta";
userTwo.fulluserName = "SaadPasta-dev";
userTwo.position = "Senior Software Engineer";

// console.log(userTwo);

// Let's merge both objects 
const allUsers = Object.assign({},userOne, userTwo);
// console.log(allUsers);

// Let's merge both objects with spread operator
const allnewUsers = { ...userOne, ...userTwo };
// console.log(allnewUsers);

// Accessing array of objects

const movies = [
    { moviename: "X Men", releaseDate: 2019 },
    {moviename : "Deadpol & Volverian", releaseDate : 2024}
]

console.log(movies[0].moviename);
console.log(movies[1].moviename);

// Checking Object keys
console.log(Object.keys(userOne));
console.log(Object.values(userTwo));

// Checking if the object has a property or not
console.log(userOne.hasOwnProperty('age'));
console.log(userOne.hasOwnProperty('role'));