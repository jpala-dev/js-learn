//creating date objects
var d=new Date()
var d1=new Date(2020,03,30,19,42,1)
var d2=new Date(234)
var d3=new Date("2020-03-30,19:45,32")
console.log(d)
console.log(d1)
console.log(d2)
console.log(d3)
//converting date to milliseconds
var msec= Date.parse(2020,03,30,34,54,30)
var date1= new Date(msec)
console.log(date1)