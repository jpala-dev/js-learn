function myFunction(a,b) {
    return a*b;
}
let sample=myFunction.toString();
console.log(sample)
//example using arguments

function argumentFunction(a, b){
    return arguments;
}

function restOperatorFunction(a, b, ...restvariables) {
    console.log(a, b)
    return restvariables;
}
console.log(restOperatorFunction(4, 6));