//accessing character in a string - use charAt() 
console.log(s2.charAt(3)); //r

//letter repition program

function repition(str,letter){
    var count = 0;
    for(i = 0; i < str.length; i++){
        if(str.charAt(i) == letter){
            count++;
        }
    }
    return count;
}
console.log(repition("Hello World","l"));