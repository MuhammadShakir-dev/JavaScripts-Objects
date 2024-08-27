class User { 
    constructor(username) { 
        this.username = username 
    }    

    logMe() { 
        console.log(`Username is: ${this.username}`);
    }
} 

class Teacher extends User { 
    constructor(username, email, password) { 
        super(username)
        this.email = email
        this.password = password
    }

    addCourse() { 
        console.log(`Course is added by: ${this.username} sucessfully`);
    }
}

const newUser = new Teacher('Shakir', 'xyz@gmai.com', '21323');
newUser.logMe()
newUser.addCourse()

// User clas(parent class) don't have access to methods of Teacher class(child class), but child class has full access to parent class
