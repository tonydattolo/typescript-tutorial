// Data Types

// JS evaluates expressions left to right
var x = 16 + 4 + "volvo"; // out: 20volvo

// numbers stay numbers until they run into a string, strings stay strings always
var x = "volvo" + 16 + 4; // out: volvo164

// JS types are dynamic
var x;           // Now x is undefined
x = 5;           // Now x is a Number
x = "John";      // Now x is a String

// JS numbers
var x1 = 34.00; // decimal
var x2 = 34; // no decimal
var expoNum0 = 123e5; // 12300000 scientific exponential notation
var expoNum1 = 123e-5; // 0.00123

// booleans: true | false

// JS Arrays: arrays are object type in JS
var cars = ["mustang", "gto", "tesla p100d"]

// JS Objects (JSON?)
var person = { firstName: "James", lastName: "Bond", age: "50", eyeColor: "blue" }
// inner objects are of type undefined

// undefined type
var sillyVar;

console.log(person.lastName);
console.log(person[0]);
console.log(person[1]);


console.log(typeof person);
console.log(typeof cars);
console.log(typeof x1);
console.log(typeof sillyVar);

// Null
// in JS, null is an object. You can empty an object by setting it to null.
person = null; //typeof returns object still

console.log(typeof person);

// Null vs Undefined: equal in value, different in type

// Primitive Types
// string, number, boolean, undefined

// Complex Data
// object: objects, arrays, null
// function