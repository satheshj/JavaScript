//indexOf() - returns index of first matching element in the array
var product = ["Stationary","pen","Ball Point",15,"reynolds","Ball Point", "Gel"];
document.writeln(product.indexOf("Ball Point")); // 2
document.writeln(product.indexOf("apple")); //-1

//lastIndexOf - returns index of last matching element in the array
document.writeln(product.lastIndexOf("Ball Point")); // 5
document.writeln(product.lastIndexOf("apple")); // -1

// We can give value and the starting Index for searching
//indexOf(search_value,searching position)
document.writeln(product.indexOf(("Ball Point"),3));// 5

//includes() - will return boolean value true only when the element is present inside the array
document.write(product.includes(15)); //True
document.write(product.includes(10)); //False

//find() - when the condition is true this method will return first matching element
var result = product.find(function(ele){
    return ele == "Ball Point";
});
document.write(result);