function Person(lname,fname,city)
{
    this.firstName=fname;
    this.lastName=lname;
    this.city=city;
};
for(x in Person)
{
console.log(Person[x]);
}
var person=new Person("jyothi","pala","vizag");
console.log(person);  