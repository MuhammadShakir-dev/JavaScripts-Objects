// ES6 JavaScript

class User { 
    constructor(username, email, password) { 
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword() {
        return `${this.password}#12s6hsa`
    } 

    setUserName() { 
        return `${this.username}@GitHub.com`
    }
}

const userOne = new User('Shakir', 'xyz@google.com', 'Pak11');
console.log(userOne.encryptPassword());
console.log(userOne.setUserName());

// Behind the scnz - if we don't have class syntax

function AnotherUser(username, email, password) { 
    this.username = username
    this.email = email
    this.password = password
} 

AnotherUser.prototype.encryptPassword = function(){ 
    return `${this.password}#12s6hsa`
}

AnotherUser.prototype.setUserName = function(){ 
    return `${this.username}@GitHub.com`
}

const userTwo = new AnotherUser('Haris', 'xyz@meta.com', 'ksdhas');
console.log(userTwo.encryptPassword());
console.log(userTwo.setUserName());