function person() {
    this.name1 = "Sathesh"
    this.age = 21
    let innerFunc = () => {
        console.log(name1,age)
    }
    innerFunc()
    
}
person()