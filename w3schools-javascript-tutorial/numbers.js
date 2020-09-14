var x = 3.14; // A number with decimals
var y = 3; // A number without decimals

// scientific exponential notations
var x = 123e5; // 12300000
var y = 123e-5; // 0.00123

// precision to 15 digits
var x = 999999999999999; // x will be 999999999999999
var y = 9999999999999999; // y will be 10000000000000000

// floating point imprecision
var x = 0.2 + 0.1; // x will be 0.30000000000000004
var x = (0.2 * 10 + 0.1 * 10) / 10; // x will be 0.3

// NaN
var x = 100 / "Apple"; // x will be NaN (Not a Number)
var x = 100 / "10"; // x will be 10

// Hexidecimal
var x = 0xff; // x will be 255

// Base number conversion
var myNumber = 32;
myNumber.toString(10); // returns 32
myNumber.toString(32); // returns 10
myNumber.toString(16); // returns 20
myNumber.toString(8); // returns 40
myNumber.toString(2); // returns 100000

var x = 500;
var y = new Number(500); // (x == y) is true because x and y have equal values

var x = 500;
var y = new Number(500); // (x === y) is false because x and y have different types

// NUMBER METHODS

var w = 33;
w.toString();
w.toExponential(2);
w.toFixed(2);

var z = 6.666;
z.toPrecision(10);

// variable to number conversion:
// Number() Method
Number(true);          // returns 1
Number(false);         // returns 0
Number("10");          // returns 10
Number("  10");        // returns 10
Number("10  ");        // returns 10
Number(" 10  ");       // returns 10
Number("10.33");       // returns 10.33
Number("10,33");       // returns NaN
Number("10 33");       // returns NaN
Number("John");        // returns NaN
Number(new Date("2017-09-30"));    // returns 1506729600000, the # of milliseconds since 1/1/1970

// parseInt() method
parseInt("10");         // returns 10
parseInt("10.33");      // returns 10
parseInt("10 20 30");   // returns 10
parseInt("10 years");   // returns 10
parseInt("years 10");   // returns NaN 
// parseFloat() method
parseFloat("10.33");     // returns 10.33

// JS number bounds
var x = Number.MAX_VALUE;
var x = Number.MIN_VALUE;
var x = Number.POSITIVE_INFINITY;
var x = Number.NEGATIVE_INFINITY;
var x = Number.NaN;
