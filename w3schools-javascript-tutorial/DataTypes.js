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

// JS String methods
// indexOf returns index where the first instance of the wanted substring begins
// lastIndexOf returns the index where the last instance of the substring ends
// both return -1 if not found
// search() is used for regular expresisons
// slice(begin, end-1)  can count in reverse too: slice(-12,-6)
//  omitting second parameter slices until the end
// substring(begin,end-1) doesn't take reverse vals like slice
// substr(begin,lengthToSliceFor)
// replace("content","wanted") *only replaces the first match, and is case sensitive
//      to make case-insensitive use a regex /i insensitive flag:
//          var n = str.replace(/MICROSOFT/i,"wanted")
//      to replace all cases use regex /g global flag:
//          var n  = str.replace(/Microsoft/g,"wanted")
// *strings are immutable, all methods return a new string 
// trim()

// Extracting chars from strings:
// charAt(position)
// charCodeAt(position) returns UNICODE val of char

// Converting string to an array
// .split(delimeter)
//      ex: txt.split(","), txt.split(" ")


// Comparing objects will always be false
var stringObj0 = new String("test0");
var stringObj1 = new String("test0");
console.log(stringObj1 === stringObj0); //false
console.log(stringObj1 == stringObj0); //false

// undefined type
var sillyVar;

// console.log(person.lastName);
// console.log(person[0]);
// console.log(person[1]);


// console.log(typeof person);
// console.log(typeof cars);
// console.log(typeof x1);
// console.log(typeof sillyVar);

// Null
// in JS, null is an object. You can empty an object by setting it to null.
person = null; //typeof returns object still

// console.log(typeof person);

// Null vs Undefined: equal in value, different in type

// Primitive Types
// string, number, boolean, undefined

// Complex Data
// object: objects, arrays, null
// function