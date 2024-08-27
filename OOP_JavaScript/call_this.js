function setUserName(username) { 
    this.username = username
    return this
}  

function createUser(username, email, password) { 
    setUserName.call(this, username)
    this.email = email
    this.password = password
}

const userOne = new createUser("Shakir", "xyz@google.com", "1234");
console.log(userOne);
