
// Hoisitng in javascript

// -> Hoisting is the default behaviour of javascript where all the variable and function declarations are moved on top.
// This means that irrespective of where the variables and functions are declared, they are moved on top of the scope. 
// The scope can be both local and global.

hoistedVariable = 3;
console.log(hoistedVariable); // outputs 3 even when the variable is declared after it is initialized	
var hoistedVariable;

// var , let and const hoisting
//  Variable initializations are not hoisted, only variable declarations are hoisted.

// Variables defined with let and const are hoisted to the top of the block, but not initialized.

// Meaning: The block of code is aware of the variable, but it cannot be used until it has been declared.
// var name = "salman"
// Using a let variable before it is declared will result in a ReferenceError.
// carName = "Volvo";    // referenceError
// let carName;

// The variable is in a "temporal dead zone" from the start of the block until it is declared:

// Using a const variable before it is declared, is a syntax errror, so the code will simply not run.
// carName = "Volvo";    // syntexError
// const carName;
var person;
function sample (){
    person = "salman"

}
sample()
console.log(person)
