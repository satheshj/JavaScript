function evaluate(n1,n2,operation){
    if(operation === "add"){
       return n1+n2;
    }
    else if (operation === "sub"){
       return n1-n2;
    } 
    else if (operation === "mul"){
       return n1*n2;
    } 
    else if (operation  === "div") {
       return n1/n2; 
    } 
    else if(operation === "mod") {
       return n1%n2; 
    }  
    else{
       return "Invalid operations";
    }
   }

var n1 = parseInt(prompt("Enter the values"));
var n2= parseInt(prompt("Enter the values"));
var operation=prompt("add/sub/mul/div/mod");
document.write(evaluate(n1,n2,operation));