//object can covert into an array
let expression={
    face1:"smile",
    face2:"laughing",
    face3:"crying",
    face4:"sad"
};
var myarray=Object.values(expression);
console.log(myarray)
//converting into string and also dates into string
var mystring=JSON.stringify(expression);
console.log(mystring);
let date={
    country:"india",
    today:new Date()
};
var string=JSON.stringify(date)
console.log(string);

