var cars = ["mustang", "bronco", "tesla"];
var cars = new Array("mustang", "bronco", "tesla");
var firstCar = cars[0];

cars[0] = "gt";

var person = { firstName: "james", lastName: "bond", age: 44 };

function something() {}
// Array elements can be objects, functions, or arrays
var arr0 = [];
var arr1 = new Array(10); // creates array with 10 undefined elements

arr0.push(something());
arr0.push(new String("objectString"));
arr0.push(cars);
arr0.push(48);
arr0.push("primStr");
// for (let index = 0; index < arr0.length; index++) {
//   console.log(arr0[index]);
// }

// Array type checking
Array.isArray(arr0); // fixes typeof returning object for arrays
arr0 instanceof Array; //returns true

// Array to string conversion
var arr2 = [];
arr2.push(cars.toString);
arr2.push(cars.toString());
arr2.push(cars.join(" && "));

// for (let i = 0; i < arr2.length; i++) {
//   console.log(arr2[i]);
// }


// Array movement
var fruits = ["banana","kiwi","apple","orange"]; console.log(fruits)
fruits.push("cranberry"); console.log(fruits);
fruits.pop(); console.log(fruits);
fruits.shift(); console.log(fruits); // dequeue 
fruits.unshift("lemon"); console.log(fruits); // enqueue
// can append using .length to add using index position of the ending index + 1
fruits[fruits.length] = "strawberry"; console.log(fruits)
// clone array
var fruity = fruits.slice();
fruity.push("canoli");
console.log(fruity);