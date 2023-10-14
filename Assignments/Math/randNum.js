function rand(min,max){
    return Math.round(Math.random() * (max - min ) + min)
}
function randn(max){
    return Math.round(Math.random()*max)
}
function randi(){
    return Math.round(Math.random())
}
console.log(rand(20,1))
console.log(rand(1,10))
console.log(randn(20))
console.log(randi())