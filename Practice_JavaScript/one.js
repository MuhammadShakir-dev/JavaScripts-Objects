// undefined
let a;
console.log(a);

// not defined
// console.log(b);

// Type -> Primitive -> Non Primitive
// -> Primitive
String
Number
Boolean
undefined
null

// -> Non Primitive 
Function
Object
Array

let c = 1
let d = c + 1
console.log(c);
console.log(d);

let ary1 = [1, 2, 4, 5];
let ary2 = ary1;

ary2.push(6)
console.log(ary1);
console.log(ary2);

// to get rid of this use spread operator
let ary3 = [1, 2, 3, 4, 5, 6]
let ary4 = [...ary3]

ary4.pop()
console.log(ary3);
console.log(ary4);

// Loops
// there are two types of loops in JS -> for loop -> while loop

for (let i = 0; i <= 10; i++) { 
    // console.log(i);
}

console.log('-------------------------------');

let j = 0
while (j <= 10) { 
    // console.log(j);
    j++
}

// functions
function sum(num1, num2) { 
    return num1 + num2
}

console.log(sum(1, 2));

let add = (num1, num2) => { 
    return num1 + num2
}

console.log(add(2,3));

let addition = (num1, num2) => num1 + num2;
console.log(addition(4, 5)); 

// methods
let calculator = {
    add: (num1, num2) => num1 + num2,
    mul: (num1, num2) => num1 * num2,
    div: (num1, num2) => num1 / num2,
    sub: (num1, num2) => num1 - num2
}

console.log(calculator.add(1, 2));

Object.prototype.add = function (num1, num2) { 
    return num1 + num2
}

console.log(Object.add(4,3));