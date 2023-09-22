//The value for object property can be function,array,object
//function as a property
var bike = {
    "brand" : "honda",
    "name" : "CB350",
    action : function (){
        console.log("Can travel from one place to another");
    }
}
console.log(bike); //function will not run
console.log(bike.action()); // now function will run

//array as a property
var bike1 = {
    "brand" : "honda",
    "name" : "CB350",
    "spares" : ["tyre","mirror"]
}
console.log(bike1);
console.log(bike1.spares[0]); // access first element of spares array

//object as a property
var vechicle = {
    "car" : {
        brand : "Lexus",
        wheels : "4",
        "Gear type" : "Automatic",
        "Fuel type" : "Hybrid"
    },
    "use" : "Transport"
}
console.log(vechicle);
console.log(vechicle.car["Fuel type"]); //Hybrid