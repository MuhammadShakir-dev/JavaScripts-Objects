# JavaScript and Classes
 

## OOP

## new Keyword
Step 1. 
- When you use new keyword an empty object is created
  {} and this is called instance.

Step 2.
- A constructor function is called due to new keyword. and packed your arguments in an empty object.

Step 3
- this keyword will inject your aurguments in the empty object or in the new instance.

Step 4
- you will finally get your output.

## new keyword functionality
Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that is has aceess to propeties and method defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified  arguments and this is bound to the newly created object. If no explicit return value is  specified form the constructor. JavaScript assumes this, the newly created object, to be the intended return value,

The new object is returned: After the constructor function has been calledm if it doesn't return a non=premitive value {object, array, function, etc.} the newly created object is returend.





  