function protectEmail(str){
    var semail = str.split("@");
    return "user..." + semail[1];
}
console.log(protectEmail("jaani@gmail.com"));