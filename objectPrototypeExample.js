//object prototype example
function Company(bharat,usa,canada,japan) {
    this.india=bharat,
    this.USA=usa,
    this.Canada=canada,
    this.Japan=japan
};
Company.prototype.Uk="whipro";
let company=new Company("accenture","tata","deloitte","techmehindra");
console.log(company.Uk);