//spliting a string into an array - str.split(seperator)
var fruits = "Apple,Banana,MAngo,Orange";
var fruitsarr = fruits.split(",");
console.log(fruitsarr); // ['Apple', 'Banana', 'MAngo', 'Orange']

//to split every character in the string
var fruits = "Apple,Banana,MAngo,Orange";
var fruitsarr = fruits.split("");
console.log(fruitsarr); //['A', 'p', 'p', 'l', 'e', ',', 'B', 'a', 'n', 'a', 'n', 'a', ',', 'M', 'A', 'n', 'g', 'o', ',', 'O', 'r', 'a', 'n', 'g', 'e']