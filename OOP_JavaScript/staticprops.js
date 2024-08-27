class User { 
    constructor(username) { 
        this.username = username
    }

    logMe() { 
        console.log(`Username is: ${this.username}`);
    }

    static generateID() { 
        return Math.floor(Math.random() * 100 + 1)
    }
}

const newUser = new User('Shakir')
console.log(newUser.generateID()) 

class Teacher extends User { 
    constructor(username, email) { 
        super(username)
        this.email = email
    }
}

const anotherUser = new Teacher('Shakir', 'xyz@udemy.com')
console.log(anotherUser.generateID()) 