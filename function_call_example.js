let person =  {
    fullName: function(city, country) {
        return `${this.firstName} ${this.secondName} ${city} ${country}`;
    }
}

let person1 = {
    firstName:"Jyothi",
    secondName:"Pala"
}
let person2 = {
    firstName:"Parvej",
    secondName:"Ahmmed"
}
console.log(person.fullName.call(person2, "Dhaka", "Bangladesh"));