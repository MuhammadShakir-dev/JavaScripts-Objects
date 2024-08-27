// creating object literals

// const user = {
//     username: "Shakir",
//     login: 8,
//     singedIn: true,

//     getUserDetails: function () { 
//         return `hello ${this.username} you have ${this.login} attempts!!`;
//     }
// }

// console.log(user['username']);
// console.log(user.login);
// console.log(user.getUserDetails());

// creating an object using constructor function and new keyword and creating its multiple instances using new keyword

function user(username, depart, email, age, languages) { 
        this.username = username,
        this.department = depart,
        this.email = email,
        this.age = age,
        this.languages = languages,
        
        this.greeting = function () { 
            console.log(`${this.username} your prefered programing langs are ${this.languages}`);
        }    
    
        return this
}

const userOne = new user("Shakir", "Software Engineering", "xyz@google.com", 23, ['JavaScript', 'TypScript']);
console.log(userOne.languages);
userOne.greeting();

