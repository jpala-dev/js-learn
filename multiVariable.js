var a="this about akash"
var b="akash",job="software engineer",sal=32000;
console.log(b)
console.log(job)
console.log(sal)
console.log(a)

var a = [{
    name: "Akash",
    job: "Softwere engineer",
    salary: 32000,
    getSalary: function() {
        return this.salary;
    }
},
{
    name: "Jyothy Reddy",
    job: "Softwere engineer",
    salary: 13000,
    getSalary: function() {
        return this.salary;
    }
}].forEach(element => {
    console.log(element.name, element.getSalary())
});
