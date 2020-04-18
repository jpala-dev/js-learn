//write a function which will not take any arguments but if I pass any it will print in console using for loop
myFunction(1,2,3,6,7,8,9,10);
function myFunction() {
    for (let i in arguments){
        console.log(arguments[i])
    }
}