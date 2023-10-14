function doubleChars(s){
    sArr = s.split("")
    str=""
    sArr.map((i) => {
        str+=i+i
    })
    console.log(str)
}
doubleChars('str')