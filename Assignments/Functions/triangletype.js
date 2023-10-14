var s1 = parseInt(prompt("Enter the length of first side"));
var s2 = parseInt(prompt("Enter the length of second side"));
var s3 = parseInt(prompt("Enter the length of third side"));
findTriangleType(s1,s2,s3);
function findTriangleType(side1,side2,side3) {
    if((side1==side2)&&(side2==side3)){
        document.write("Equilateral Triangle");
    } else if((side1 == side2)|| (side2 == side3)){
        document.write("Isoscles Triangle");
    } else{
        document.write("Scalene treiangle");
    }
    
}