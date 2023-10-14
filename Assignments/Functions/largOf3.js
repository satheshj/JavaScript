var a = parseInt(prompt("Enter the first number"));
var b = parseInt(prompt("Enter the first number"));
var c = parseInt(prompt("Enter the first number"));
findLargest(a,b,c);
function findLargest(n1,n2,n3){
    if(n1>n2 && n1>n3){
        document.write(n1+" is the largest number");
    }
    else if(n2>n3){
        document.write(n2+" is the largest number");
    }
    else{
        document.write(n3+" is the largest number");
    }
}
