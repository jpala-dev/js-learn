//adding function to an object
let fun={
    type1:"laugh",
    type2:"comedy",
    type3:"sarcastic"
};
fun.type=function() {
    
    return this.type1+"  "+this.type2;
};
console.log(fun.type())