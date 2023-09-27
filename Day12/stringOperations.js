//Quotes in String
var str = "Mark\'s son";
var s1 = "\"Hello World!\"";
var s2 = `Hello World
I am studying full Stack Development
2023`;
console.log(s2);//Hello World
                // I am studying full Stack Development
                // 2023

//length is a property to find the length of string,array,etc
console.log(s1.length); //14

//finding string inside the string that holds it

//indexOf() - returns the index of the first ouccurence, p
var str = "If you trouble the trouble, trouble troubles you I\'m not the trouble I\'m the truth";
console.log(str.indexOf("trouble")); //7

//lastIndexOf() - returns the index of the last ouccurence

console.log(str.lastIndexOf("trouble")); //61
console.log(str.indexOf("the",60)) //73
console.log(str.indexOf("a",60)) //-1

//search() - return the first occurence of a string or regular expression

console.log(str.search());

//For slicing use slice()

console.log(str.slice(10,30)); //uble the trouble, tr

//substring() - it is similar to slice method but won't accept negative index.

console.log(str.substring(8,2)) // you t

//replace string - replace(oldString,newString) will replace first match accepts regular expression
var bro = "Make hey while sunshines";
console.log(bro.replace(/hey/i,"hay")); //regular expressions output:Make hay while sunshines
console.log(bro); //Make hey while sunshines

//replaceAll() - will replace all matches

console.log(bro.replaceAll(/s/ig,"hay"));//g represents global modifier - modify accross the whole string//Make hey while hayunhayhinehay

//Capitalize
console.log(bro.toLowerCase()); // make hey while sunshines
console.log(bro.toUpperCase()); // MAKE HEY WHILE SUNSHINES

//concatenating strings - "+" symbol is used
var s1 = "Hello";
var s2 = " World!";
var s3 = "suuuuuuuuuuuuuuiiiiiiiiiiiiiiii";
var s4 = s1+s2+s3;
console.log(s4); //Hello World!suuuuuuuuuuuuuuiiiiiiiiiiiiiiii

//accessing character in a string - use charAt() 
console.log(s2.charAt(3)); //r

