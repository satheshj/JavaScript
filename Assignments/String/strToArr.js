var str = prompt("Enter a String");
function stringToArray(){
    var strArr = str.split(" ");
    return strArr;
}
console.log(stringToArray(str));