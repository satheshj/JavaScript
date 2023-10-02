//Function declaration syntax
//Traditional function - can be called before definition
//No argument and no return value function
function disp(){
    document.write("Hello World");
}
//With parameters and without return value
function add(p1,p2){
    document.write(p1+p2);
}
//with parameters and return value
n = parseInt(prompt("Enter thr number"));
function squareof(n){
    return n**2; // return the squareof
}

//Anonymous or expression - cannot be called before definition
let disp = function(){
    console.log("Hello World")
}
disp(); //Hello World

//Arrow Function - cannot be called before definition
let disp = (a) =>{
    console.log("This is arrow function" + a);
}
disp("Hello World"); // This is arrow functionHello World

let hello = () =>{
    console.log("Hello World");
}

//                              callback function -- passing function as an argument for other function

console.log(hello()); //Hello World
                    // undefined

a = [1,2,3,4,5,6];
let res = a.filter((i) =>{
    return i<=3;
})
console.log(res); //  [1, 2, 3]

