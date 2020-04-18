let employee = {
    empDetails: function( city, country) {
        return `${this.name} ${this.companyName} ${city} ${country}`; 
    }
}

let employee1 = {
    name: "Akash",
    companyName: "accenture"
}
 
let employee2 = {
    name: "mahitha",
    companyName: "deloitte"
}

console.log(employee.empDetails.apply(employee1, ["Hyderabad", "India"]))