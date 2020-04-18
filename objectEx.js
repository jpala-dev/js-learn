//coverting function to String
const baloon={
    brithday:"red",
    party:function() {
        return "pink";
    }
};
baloon.party=baloon.party.toString();
var string=JSON.stringify(baloon);
console.log(string)
//converting array to string
let envirnoment=["air","trees","water","people"];
var mystring=JSON.stringify(envirnoment);
console.log(mystring);

    