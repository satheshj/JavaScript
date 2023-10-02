// By giving double quotes we can make invalid identifier as a valid identifier
var Student = {
    "Name":"Sathesh",
    "age": 21,
    "location of the student": "Coimbatore"//invalid identifier
}
//accessing valid identifier by using "."
console.log(Student.age); // 22
//accessing non-valid identifier by using[]
console.log(Student["location of the student"]); //Coimbatore

let person = {
    "Name" : "sathesh",
    "age" : 21
}

let location1 = {
    "city" : "coimbatore",
    "pin" : 641046
}
let person_details = {
    ...person,
    ...location
}
console.log(person_details); // {Name: 'sathesh', age: 21, city: 'coimbatore', pin: 641046}