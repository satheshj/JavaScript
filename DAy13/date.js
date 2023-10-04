var a = new Date();
console.log(a);  // returns current date and time //Mon Sep 25 2023 17:21:38 GMT+0530 (India Standard Time)

//assigning date
var bDate = new Date(2002,1,16,17,35,20);
console.log(bDate); // Sat Feb 16 2002 17:35:20 GMT+0530 (India Standard Time)

//passing string as an argument
var c = new Date("16 feb 2023");
console.log(c); //Thu Feb 16 2023 00:00:00 GMT+0530 (India Standard Time)
 
//passing milliseconds as an argument 
var millDate = new Date(1);
console.log(millDate); // Thu Jan 01 1970 05:30:00 GMT+0530 

//Displaying date

console.log(bDate.toDateString()); //Sat Feb 16 2002

console.log(bDate.toLocaleDateString()); //     2/16/2002

console.log(bDate.toISOString()); // 2002-02-16T12:05:20.000Z

console.log(bDate.toUTCString()); // Sat, 16 Feb 2002 12:05:20 GMT

console.log(bDate.toString()); // Sat Feb 16 2002 17:35:20 GMT+0530 (India Standard Time)

// Display time 
console.log(a.toTimeString()); // 17:48:59 GMT+0530 (India Standard Time)

console.log(a.toLocaleTimeString()) // 5:50:20 PM