// write a funciton to add two nums

const add = (num1, num2) => {
    return num1 + num2
};

// using implicit return
const sum = (num1, num2) => (num1 + num2);  

// not using ();
const addition = (num1, num2) => num1 + num2;

// return object in implict return
const userDetails = (username, userId) => ({
    username: username,
    userId: userId
})
console.log(userDetails("Muhammad Shakir", 77));

// using this in objects
const userOne = {
    username: "Muhammad Shakir",
    githubUserName: "MuhammadShakir-dev",
    githubFollowers: 87,
    githubRepos: 159,
    githubContributions: 2764,

    info: function (){ 
        return `Hello ${this.username} your GitHub username is: ${this.githubUserName}, your followers: ${this.githubFollowers}, your created: ${this.githubRepos} repos, your contributions are: ${this.githubContributions}`
    }
}

console.log(userOne.info());


