// Math class has a lot of properties and methods
var pi = Math.PI; // holds 3.141592653589793
console.log(Math.abs(-55)); // prints 55
//Get a Random number (used to generate OTP)
console.log(Math.random()); // prints a value between 0 and 1
console.log(Math.sqrt(25)); // prints 5
console.log(Math.sqrt(-9)); // returns NaN

//Rounding a number
//ceil - highest integer
console.log(Math.ceil(5.6)); // 6
console.log(Math.ceil(-5.7)); //5

//floor - lowest interger
console.log(Math.ceil(5.6)); // 5
console.log(Math.ceil(-5.7)); // -6

//toFixed - used to reduce decimal points
console.log(4.55553234.toFixed(2)); //4.55

//min and max
console.log(Math.min(3,4,5)); //3
console.log(Math.max(3,4,5)); //5
// for the use of array we go for "..." spread operator
arr = [2,4,1];
console.log(Math.min(...arr)); //1
console.log(Math.max(...arr)); //4

//power - Math.pow(number,power)
console.log(Math.pow(3,4)); //81

