//Creating with list brackets or square brackets
var fruits = ["apple","strawberry","watermelon"];
console.log(fruits);
//by constructor
var color = new Array("Red","Maroon","white");
console.log(color);
arr1 = [1,2,3];
arr2 = ["red","yellow"];
arr3 = [arr1,arr2] // (2) [Array(3), Array(2)]
arr4 = [...arr1,...arr2]; // [1, 2, 3, 'red', 'yellow']

