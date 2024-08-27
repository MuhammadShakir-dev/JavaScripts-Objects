// create a method in the string prototype that will remove all the extraspaces and give your truelength
let myName = 'Shakir    '
let myChannel = 'learnwithshakir     '

String.prototype.trueLength = function () { 
    console.log(`true length of string is: ${this.trim().length}`);
}

myName.trueLength() // here this is -> myName -> Shakir  
"JavaScript   ".trueLength(); // here this is -> JavaScript  

let myHeros = ['thor', 'spiderman'];

let myHeroPowers = {
    thor: "Hammer",
    spiderman: "Sling",

    getSipderPower: function () { 
        console.log(`Spiderman Power is ${this.spiderman}`);
    } 

}

// create a method in the prototype of object
Object.prototype.shakir = function () { 
    console.log('Power of shakir is JavaScript');
}

// now acces this object with herpowers and heros
myHeroPowers.shakir()
myHeros.shakir()


// inheritance in JavaScript - Out Dated Approch
const User = {
    name: 'chai',
    email: 'chai@gooole.com'
}

const Teacher = {
    makeViedo : true
}  
 
const TeachingSupport = {
    isAvaliable : false 
}

const TASupport = {
    makeAssignments: 'JS Assignments',
    fullTime: true 
}

// linking two objects -  Out Dated Approch
TeachingSupport.__proto__ = TASupport
Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)