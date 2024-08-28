class User { 
    constructor(email, password) { 
        this.email = email
        this.password = password
    }

    get email() { 
        return `${this._email.toUpperCase()}`
    }

    set email(value) { 
        this._email =  value
    }

    get password() { 
        return `${this._password}Shakir`
    }

    set password(value) { 
        this._password = value
    }
}

const newUser = new User('xyz@google.com', 'abc')
console.log(newUser.password);
console.log(newUser.email);

// 