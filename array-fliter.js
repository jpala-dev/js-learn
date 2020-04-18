const array_number = [12,34,25,56,54,34,78,98]
const array_number2 = array_number.filter(myFunction);
function myFunction(value)
{
    return value > 18;
}
console.log(array_number2);
