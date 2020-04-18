//functions example
function example(y,z) {
    return y*z;
};
var x= example(12,45)
console.log(x);
//function expression example
var rank=function(a,b) {return a+b;};
var ab=rank(12,34);
console.log(ab);
//function constructor example
var percentage= new Function("a","b","return a*b")
// hoisting example 
console.log(myFunction(23), 'first')
function myFunction(y) {
    return y;
};
console.log(myFunction(5), 'second');





