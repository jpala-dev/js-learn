//using function in object
let color={
    shirt:"yellow",
    jeans:"black",
    sky:"blue",
    fullData:function() {
        return this.shirt +"  "+ this.jeans +"  "+ this.sky;
    }
};
console.log(color.fullData())
