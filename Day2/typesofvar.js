//var
var nova = 0;
{
    var nova = 9;
    console.log(nova) // 9 redeclartion
}
nova = 76;
console.log(nova); // 76 updation
mark = 1200;
console.log(mark);
var mark; //hoisting possible
//let
let nova;
{
    let nova = 9;
    console.log(nova) // error
}
nova = 76;// 76 updation
console.log(nova); // 76 updation

nova1=4;
console.log(nova1);
let nova1; // hoisting is not possible
//const(constant)
{
    const pi = 3.14;
    console.log(pi);
}
console.log(pi);//not possible because it is block scoped
const pi = 3.14;
pi = 3; //updation of constant not possible(immutable)
// const pi = 3; // it cannot be redeclared
// const a; //should intialize while declaring
//to find type we can use typeof()
var v1 = 12;
console.log(typeof(v1));
