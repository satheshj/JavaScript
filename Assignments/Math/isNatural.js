function isNatural(i){
    if(i == Infinity || i<=0){
        return false
    } else{
        return true
    }
}
console.log(isNatural(0))
console.log(isNatural(1))
console.log(isNatural(1/0))