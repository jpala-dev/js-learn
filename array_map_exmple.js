const array_flower = ["marigold","lilly","rose","sunflower"];
const array_example = array_flower.map(myFunction);
function myFunction(value,index,array)
{
    return value ;

}
console.log(array_example);
//another exmple2 of map 
const array_number = [12,34,56,78,90,123]
const copy_number = array_number.map(functionMy);
function functionMy(value,index,array)
{
    return value*2;
}
console.log(copy_number);