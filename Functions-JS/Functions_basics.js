// write a function to add two numbers
function sum(num1, num2) { 
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2;
    } else { 
        return "try again :(";
    }
}

console.log(sum(2, 4));

// Write a function for userLogin
function isLoggedIn(username, password) { 
    if (username === undefined || password === undefined) {
        return `Please enter a valid username or password`
    } else { 
        return `${username} you have sucessfully logedin!!!`
    }
}

console.log(isLoggedIn("Shakir","ahdsajd"));


// new syntax to do this
function userAuthentication(username, password) { 
    if (!username || !password) {
        return `Plesae enter a valid username or password`
    } else { 
        return `${username} you have sucessfully logedIn!!!`
    }
}

console.log(userAuthentication("Shakir","asdsadsa"));