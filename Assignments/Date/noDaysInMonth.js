function noOfDAysInMonth(mon,year){
    return new Date(year, mon, 0).getDate(); 
}
console.log(noOfDAysInMonth(2,1991))