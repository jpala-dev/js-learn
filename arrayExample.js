var array=["jyothi","akash","pala"]
console.log(array)
var array2=
[
    "flower",
    "nuts",
    "fruits"
]
console.log(array2)
//using new keyword......which is take more time execute
var array3=new Array(12,34,57,89)
console.log(array3)
//access the element of an array using index number
console.log(array2[2])
//changing the element in array
var array4=new Array("love","care","rommance")
array4[2]="responsibility"
console.log(array4);
//creating object of array
var person={name:"akash",lastname:"ahammed",age:24};
console.log(person.name);
//methods to display length and sorting in an array
console.log(array3.length)
console.log(array2.sort)
//looping an array
for(var i=0;i<=array2.length-1;i++)
{
    console.log(i);

}
console.log(i)

//adding element  to the array using push method
//person.push(countery:"bangladesh")/
array3.push(23)
console.log(array3)
//adding new element using length method
array4[array4.length]="korea"
console.log(array4)
//associative index 
var arr=[]
arr[1]="jyothi"
arr[2]="kumari"
arr[3]="sivaji"
arr[4]="prema"
console.log(arr)
//accessing last element in array
var aa=arr[arr.length-1]
console.log(aa)

