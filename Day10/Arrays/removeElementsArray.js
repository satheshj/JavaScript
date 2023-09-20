var product = ["Stationary","pen",15,"reynolds"];
//pop() - will remove last element
var company = document.write(product.pop() + "<br/>");
//shift() - will remove first element from an array
var category = document.write(product.shift() + "<br/>");
document.write(product + "<br/>");
//splice() - remove multiple elements(syntax - arr.splice(startIndex,no of elements to be deleted))
var product = ["Stationary","pen",15,"reynolds","Ball Point", "Gel"];
var typeOfPen = [product.splice(4,2)];
document.write(product + "<br/>");
document.write("spliced elements " + typeOfPen);