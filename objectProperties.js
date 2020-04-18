const employee={
    name:"akash",
    sal:"36k",
    country:"bangladesh"
};
for(x in employee)
{
    console.log(employee[x])
}
employee.companyName="accenture";
delete sal;
console.log(employee)