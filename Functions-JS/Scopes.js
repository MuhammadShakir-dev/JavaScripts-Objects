// Let's Disscuss about scope in JS

// let a = 1;
// var c = 3;
// const b = 2;

// console.log(a);
// console.log(b);
// console.log(c);

// All of them print sucessfully
// let's do the same thing inside of a conditional

if (true) { 
    let a = 1;
    var c = 3;
    const b = 2;
}

// console.log(a); // a is not defined
// console.log(b); // b is not defined 
console.log(c); // 3

function userOne(username) { 
    let domain = "makenotion.com";

    function getDomain() { 
        return `Hello ${username} your new email is ${username}@${domain}`
    }

    return getDomain()
}


console.log(userOne("Shakir"));




