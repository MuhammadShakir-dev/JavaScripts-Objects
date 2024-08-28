function User(email, password) { 
    // Initialize the backing fields directly
    this._email = email;
    this._password = password;
    
    Object.defineProperty(this, 'email', {
        get: function () { 
            return this._email.toUpperCase();
        },
        set: function (value) { 
            this._email = value;
        }
    });

    Object.defineProperty(this, 'password', {
        get: function () { 
            return `${this._password}abc`;
        },
        set: function (value) { 
            this._password = value;
        }
    });
}

const userOne = new User('xyz@google.com', '123');
console.log(userOne.email);    // Output: XYZ@GOOGLE.COM
console.log(userOne.password); // Output: 123abc
