let laptop={
    brand:"lenovo",
    cost:"40k",
    city:"hyderabad",
    get lang() {
        return this.city;
    }

};
console.log(laptop.lang);