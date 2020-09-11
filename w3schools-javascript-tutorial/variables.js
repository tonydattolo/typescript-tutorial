// JavaScript Vairables

// const means it cant change
const x = 4;

// var
// var has function level scope
var w = 7;

// let
// let has block level scope

function run() {
    var foo = "Foo";
    let bar = "Bar";
  
    console.log(foo, bar);
  
    {
      let baz = "Bazz";
      console.log(baz);
    }
  
    console.log(baz); // ReferenceError
  }
  
  run();