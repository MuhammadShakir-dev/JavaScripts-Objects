function multiplyBy5(num) { 
    return num * 5
}

multiplyBy5.power = 2

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);

// adding new method in the prototype

function createUser(username, score) { 
    this.username = username
    this.score = score

    return this
}

createUser.prototype.increment = function () { 
    return this.score += 5
}

createUser.prototype.printMe = function() { 
    console.log(`You score is ${this.score}`);
}


const userOne = new createUser('Shakir', 2000);
const userTwo = new createUser('Haris', 1500) 

userOne.increment()
userOne.printMe()

userTwo.increment()
userTwo.printMe()