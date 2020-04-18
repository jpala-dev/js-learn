let numbers = [12,34,56,78,87,123]
let  number2 = numbers.reduce(myFunction)
function myFunction(total,value,index,array) {
    return  total + value;
}
console.log(number2);